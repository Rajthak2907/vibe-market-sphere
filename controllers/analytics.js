import { storage } from "../storage.js";

export const analyticsController = {
  async getAdminAnalytics(req, res) {
    try {
      const period = req.query.period || "monthly"; // daily, weekly, monthly, yearly
      const startDate = req.query.start_date ? new Date(req.query.start_date) : null;
      const endDate = req.query.end_date ? new Date(req.query.end_date) : null;
      
      // Get all users, orders, and products for analytics
      const { users, total: totalUsers } = await storage.getAllUsers();
      const { orders, total: totalOrders } = await storage.getAllOrders();
      const { products } = await storage.getProducts({ limit: 1000 });
      
      // Filter orders by date range if provided
      let filteredOrders = orders;
      if (startDate && endDate) {
        filteredOrders = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate >= startDate && orderDate <= endDate;
        });
      }
      
      // Calculate revenue metrics
      const revenue = filteredOrders
        .filter(order => order.paymentStatus === "paid")
        .reduce((total, order) => total + parseFloat(order.total), 0);
      
      const pendingRevenue = filteredOrders
        .filter(order => order.paymentStatus === "pending")
        .reduce((total, order) => total + parseFloat(order.total), 0);
      
      // Calculate order metrics
      const ordersByStatus = {
        pending: filteredOrders.filter(order => order.status === "pending").length,
        confirmed: filteredOrders.filter(order => order.status === "confirmed").length,
        processing: filteredOrders.filter(order => order.status === "processing").length,
        shipped: filteredOrders.filter(order => order.status === "shipped").length,
        delivered: filteredOrders.filter(order => order.status === "delivered").length,
        cancelled: filteredOrders.filter(order => order.status === "cancelled").length,
        returned: filteredOrders.filter(order => order.status === "returned").length,
      };
      
      // Calculate user metrics
      const activeUsers = users.filter(user => user.isActive).length;
      const newUsers = users.filter(user => {
        if (!startDate || !endDate) return false;
        const userDate = new Date(user.createdAt);
        return userDate >= startDate && userDate <= endDate;
      }).length;
      
      const usersByRole = {
        user: users.filter(user => user.role === "user").length,
        admin: users.filter(user => user.role === "admin").length,
        vendor: users.filter(user => user.role === "vendor").length,
      };
      
      // Calculate product metrics
      const activeProducts = products.filter(product => product.isActive).length;
      const featuredProducts = products.filter(product => product.isFeatured).length;
      const outOfStockProducts = products.filter(product => product.inventory === 0).length;
      
      // Generate trend data (simplified)
      const trendData = generateTrendData(filteredOrders, period);
      
      // Top performing products (by order frequency)
      const productSales = {};
      for (const order of filteredOrders) {
        const orderItems = await storage.getOrderItems(order.id);
        for (const item of orderItems) {
          if (!productSales[item.productId]) {
            productSales[item.productId] = {
              productId: item.productId,
              quantity: 0,
              revenue: 0,
            };
          }
          productSales[item.productId].quantity += item.quantity;
          productSales[item.productId].revenue += parseFloat(item.total);
        }
      }
      
      const topProducts = Object.values(productSales)
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 10);
      
      // Add product details to top products
      const topProductsWithDetails = await Promise.all(
        topProducts.map(async (sale) => {
          const product = await storage.getProduct(sale.productId);
          return {
            ...sale,
            product: product ? {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.images?.[0],
            } : null,
          };
        })
      );
      
      res.json({
        success: true,
        data: {
          overview: {
            totalRevenue: revenue,
            pendingRevenue: pendingRevenue,
            totalOrders: filteredOrders.length,
            totalUsers: totalUsers,
            activeUsers: activeUsers,
            newUsers: newUsers,
            activeProducts: activeProducts,
            averageOrderValue: filteredOrders.length > 0 ? revenue / filteredOrders.length : 0,
          },
          orders: {
            total: filteredOrders.length,
            byStatus: ordersByStatus,
          },
          users: {
            total: totalUsers,
            active: activeUsers,
            new: newUsers,
            byRole: usersByRole,
          },
          products: {
            total: products.length,
            active: activeProducts,
            featured: featuredProducts,
            outOfStock: outOfStockProducts,
          },
          trends: trendData,
          topProducts: topProductsWithDetails,
        },
      });
    } catch (error) {
      console.error("Get admin analytics error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_ANALYTICS_FAILED",
          message: "Failed to get analytics data",
        },
      });
    }
  },

  async getVendorAnalytics(req, res) {
    try {
      const vendorId = req.user.id;
      const period = req.query.period || "monthly";
      const startDate = req.query.start_date ? new Date(req.query.start_date) : null;
      const endDate = req.query.end_date ? new Date(req.query.end_date) : null;
      
      // Get vendor's products
      const { products } = await storage.getProducts({ vendorId, limit: 1000 });
      const productIds = products.map(p => p.id);
      
      // Get all orders to filter vendor's orders
      const { orders } = await storage.getAllOrders();
      
      // Filter orders that contain vendor's products
      const vendorOrders = [];
      for (const order of orders) {
        const orderItems = await storage.getOrderItems(order.id);
        const hasVendorProducts = orderItems.some(item => productIds.includes(item.productId));
        if (hasVendorProducts) {
          // Calculate vendor's portion of the order
          const vendorItems = orderItems.filter(item => productIds.includes(item.productId));
          const vendorRevenue = vendorItems.reduce((sum, item) => sum + parseFloat(item.total), 0);
          
          vendorOrders.push({
            ...order,
            vendorRevenue,
            vendorItems,
          });
        }
      }
      
      // Filter by date range if provided
      let filteredOrders = vendorOrders;
      if (startDate && endDate) {
        filteredOrders = vendorOrders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate >= startDate && orderDate <= endDate;
        });
      }
      
      // Calculate metrics
      const revenue = filteredOrders
        .filter(order => order.paymentStatus === "paid")
        .reduce((total, order) => total + order.vendorRevenue, 0);
      
      const totalOrders = filteredOrders.length;
      const averageOrderValue = totalOrders > 0 ? revenue / totalOrders : 0;
      
      // Product performance
      const productSales = {};
      for (const order of filteredOrders) {
        for (const item of order.vendorItems) {
          if (!productSales[item.productId]) {
            productSales[item.productId] = {
              productId: item.productId,
              quantity: 0,
              revenue: 0,
            };
          }
          productSales[item.productId].quantity += item.quantity;
          productSales[item.productId].revenue += parseFloat(item.total);
        }
      }
      
      const topProducts = Object.values(productSales)
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 10);
      
      // Add product details
      const topProductsWithDetails = await Promise.all(
        topProducts.map(async (sale) => {
          const product = await storage.getProduct(sale.productId);
          return {
            ...sale,
            product: product ? {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.images?.[0],
            } : null,
          };
        })
      );
      
      // Product metrics
      const activeProducts = products.filter(product => product.isActive).length;
      const outOfStockProducts = products.filter(product => product.inventory === 0).length;
      const lowStockProducts = products.filter(product => product.inventory > 0 && product.inventory <= 10).length;
      
      // Generate trend data
      const trendData = generateTrendData(filteredOrders, period, "vendorRevenue");
      
      res.json({
        success: true,
        data: {
          overview: {
            totalRevenue: revenue,
            totalOrders: totalOrders,
            averageOrderValue: averageOrderValue,
            totalProducts: products.length,
            activeProducts: activeProducts,
          },
          products: {
            total: products.length,
            active: activeProducts,
            outOfStock: outOfStockProducts,
            lowStock: lowStockProducts,
          },
          trends: trendData,
          topProducts: topProductsWithDetails,
        },
      });
    } catch (error) {
      console.error("Get vendor analytics error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_VENDOR_ANALYTICS_FAILED",
          message: "Failed to get vendor analytics data",
        },
      });
    }
  },

  async getSalesReport(req, res) {
    try {
      const startDate = new Date(req.query.start_date);
      const endDate = new Date(req.query.end_date);
      const groupBy = req.query.group_by || "day"; // day, week, month
      
      if (!req.query.start_date || !req.query.end_date) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Start date and end date are required",
          },
        });
      }
      
      const { orders } = await storage.getAllOrders();
      
      // Filter orders by date range
      const filteredOrders = orders.filter(order => {
        const orderDate = new Date(order.createdAt);
        return orderDate >= startDate && orderDate <= endDate && order.paymentStatus === "paid";
      });
      
      // Group orders by specified period
      const groupedData = {};
      
      for (const order of filteredOrders) {
        const orderDate = new Date(order.createdAt);
        let groupKey;
        
        switch (groupBy) {
          case "week":
            const weekStart = new Date(orderDate);
            weekStart.setDate(orderDate.getDate() - orderDate.getDay());
            groupKey = weekStart.toISOString().split("T")[0];
            break;
          case "month":
            groupKey = `${orderDate.getFullYear()}-${String(orderDate.getMonth() + 1).padStart(2, "0")}`;
            break;
          case "day":
          default:
            groupKey = orderDate.toISOString().split("T")[0];
            break;
        }
        
        if (!groupedData[groupKey]) {
          groupedData[groupKey] = {
            period: groupKey,
            orders: 0,
            revenue: 0,
          };
        }
        
        groupedData[groupKey].orders += 1;
        groupedData[groupKey].revenue += parseFloat(order.total);
      }
      
      const salesData = Object.values(groupedData).sort((a, b) => 
        new Date(a.period) - new Date(b.period)
      );
      
      res.json({
        success: true,
        data: {
          report: salesData,
          summary: {
            totalRevenue: salesData.reduce((sum, item) => sum + item.revenue, 0),
            totalOrders: salesData.reduce((sum, item) => sum + item.orders, 0),
            period: {
              start: startDate.toISOString().split("T")[0],
              end: endDate.toISOString().split("T")[0],
              groupBy,
            },
          },
        },
      });
    } catch (error) {
      console.error("Get sales report error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_SALES_REPORT_FAILED",
          message: "Failed to get sales report",
        },
      });
    }
  },
};

// Helper function to generate trend data
function generateTrendData(orders, period, revenueField = "total") {
  const trends = {};
  const now = new Date();
  const periodLength = period === "daily" ? 30 : period === "weekly" ? 12 : 6;
  
  // Initialize trend data
  for (let i = periodLength - 1; i >= 0; i--) {
    const date = new Date(now);
    
    switch (period) {
      case "daily":
        date.setDate(date.getDate() - i);
        break;
      case "weekly":
        date.setDate(date.getDate() - (i * 7));
        break;
      case "monthly":
      default:
        date.setMonth(date.getMonth() - i);
        break;
    }
    
    const key = period === "monthly" 
      ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
      : date.toISOString().split("T")[0];
      
    trends[key] = {
      period: key,
      orders: 0,
      revenue: 0,
    };
  }
  
  // Populate with actual data
  for (const order of orders) {
    const orderDate = new Date(order.createdAt);
    let key;
    
    if (period === "monthly") {
      key = `${orderDate.getFullYear()}-${String(orderDate.getMonth() + 1).padStart(2, "0")}`;
    } else {
      key = orderDate.toISOString().split("T")[0];
    }
    
    if (trends[key]) {
      trends[key].orders += 1;
      trends[key].revenue += parseFloat(order[revenueField] || order.total);
    }
  }
  
  return Object.values(trends);
}
