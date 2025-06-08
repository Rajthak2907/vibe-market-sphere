import { storage } from "../storage.js";
import { insertOrderSchema, insertOrderItemSchema } from "../../shared/schema.js";
import { sendEmail } from "../utils/sendEmail.js";

export const orderController = {
  async createOrder(req, res) {
    try {
      const userId = req.user.id;
      const validatedData = insertOrderSchema.parse(req.body);
      
      // Calculate totals
      let subtotal = 0;
      const orderItems = [];
      
      // Validate items and calculate subtotal
      for (const item of validatedData.items) {
        const product = await storage.getProduct(item.productId);
        if (!product) {
          return res.status(400).json({
            success: false,
            error: {
              code: "PRODUCT_NOT_FOUND",
              message: `Product with ID ${item.productId} not found`,
            },
          });
        }
        
        // Check inventory
        if (product.inventory < item.quantity) {
          return res.status(400).json({
            success: false,
            error: {
              code: "INSUFFICIENT_INVENTORY",
              message: `Insufficient inventory for product ${product.name}`,
            },
          });
        }
        
        const itemTotal = parseFloat(product.price) * item.quantity;
        subtotal += itemTotal;
        
        orderItems.push({
          productId: item.productId,
          quantity: item.quantity,
          price: product.price,
          total: itemTotal.toString(),
          productSnapshot: {
            name: product.name,
            price: product.price,
            image: product.images?.[0],
          },
        });
      }
      
      // Apply discount if coupon provided
      let discount = 0;
      if (validatedData.couponCode) {
        const coupon = await storage.getCouponByCode(validatedData.couponCode);
        if (coupon && coupon.isActive) {
          if (coupon.type === "percentage") {
            discount = (subtotal * parseFloat(coupon.value)) / 100;
            if (coupon.maximumDiscount && discount > parseFloat(coupon.maximumDiscount)) {
              discount = parseFloat(coupon.maximumDiscount);
            }
          } else {
            discount = parseFloat(coupon.value);
          }
          
          // Update coupon usage
          await storage.updateCoupon(coupon.id, {
            usedCount: coupon.usedCount + 1,
          });
        }
      }
      
      const tax = subtotal * 0.08; // 8% tax
      const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
      const total = subtotal + tax + shipping - discount;
      
      // Create order
      const order = await storage.createOrder({
        userId,
        subtotal: subtotal.toString(),
        tax: tax.toString(),
        shipping: shipping.toString(),
        discount: discount.toString(),
        total: total.toString(),
        paymentMethod: validatedData.paymentMethod,
        shippingAddress: validatedData.shippingAddress,
        billingAddress: validatedData.billingAddress || validatedData.shippingAddress,
        notes: validatedData.notes,
      });
      
      // Create order items
      for (const item of orderItems) {
        await storage.createOrderItem({
          ...item,
          orderId: order.id,
        });
        
        // Update product inventory
        const product = await storage.getProduct(item.productId);
        await storage.updateProduct(item.productId, {
          inventory: product.inventory - item.quantity,
        });
      }
      
      // Clear user's cart
      await storage.clearUserCart(userId);
      
      // Send confirmation email
      try {
        const user = await storage.getUser(userId);
        await sendEmail({
          to: user.email,
          subject: "Order Confirmation",
          template: "order-confirmation",
          data: {
            name: `${user.firstName} ${user.lastName}`,
            orderNumber: order.orderNumber,
            total: order.total,
            items: orderItems,
          },
        });
      } catch (emailError) {
        console.error("Failed to send order confirmation email:", emailError);
      }
      
      res.status(201).json({
        success: true,
        message: "Order created successfully",
        data: {
          order: {
            ...order,
            items: orderItems,
          },
        },
      });
    } catch (error) {
      console.error("Create order error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CREATE_ORDER_FAILED",
          message: "Failed to create order",
        },
      });
    }
  },

  async getUserOrders(req, res) {
    try {
      const userId = req.user.id;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      const { orders, total } = await storage.getUserOrders(userId, page, limit);
      
      // Get order items for each order
      const ordersWithItems = await Promise.all(
        orders.map(async (order) => {
          const items = await storage.getOrderItems(order.id);
          return {
            ...order,
            items,
          };
        })
      );
      
      res.json({
        success: true,
        data: {
          orders: ordersWithItems,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
          },
        },
      });
    } catch (error) {
      console.error("Get user orders error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_ORDERS_FAILED",
          message: "Failed to get orders",
        },
      });
    }
  },

  async getOrder(req, res) {
    try {
      const orderId = parseInt(req.params.id);
      const userId = req.user.id;
      
      const order = await storage.getOrder(orderId);
      
      if (!order) {
        return res.status(404).json({
          success: false,
          error: {
            code: "ORDER_NOT_FOUND",
            message: "Order not found",
          },
        });
      }
      
      // Check if user owns the order (unless admin)
      if (req.user.role === "user" && order.userId !== userId) {
        return res.status(403).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "You can only view your own orders",
          },
        });
      }
      
      // Get order items
      const items = await storage.getOrderItems(orderId);
      
      res.json({
        success: true,
        data: {
          order: {
            ...order,
            items,
          },
        },
      });
    } catch (error) {
      console.error("Get order error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_ORDER_FAILED",
          message: "Failed to get order",
        },
      });
    }
  },

  async getAllOrders(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const status = req.query.status;
      
      let { orders, total } = await storage.getAllOrders(page, limit);
      
      // Filter by status if provided
      if (status) {
        orders = orders.filter(order => order.status === status);
        total = orders.length;
      }
      
      // Get order items for each order
      const ordersWithItems = await Promise.all(
        orders.map(async (order) => {
          const items = await storage.getOrderItems(order.id);
          const user = await storage.getUser(order.userId);
          return {
            ...order,
            items,
            user: user ? {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            } : null,
          };
        })
      );
      
      res.json({
        success: true,
        data: {
          orders: ordersWithItems,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
          },
        },
      });
    } catch (error) {
      console.error("Get all orders error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_ALL_ORDERS_FAILED",
          message: "Failed to get orders",
        },
      });
    }
  },

  async updateOrderStatus(req, res) {
    try {
      const orderId = parseInt(req.params.id);
      const { status, trackingNumber } = req.body;
      
      const validStatuses = ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled", "returned"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_STATUS",
            message: "Invalid order status",
          },
        });
      }
      
      const order = await storage.getOrder(orderId);
      if (!order) {
        return res.status(404).json({
          success: false,
          error: {
            code: "ORDER_NOT_FOUND",
            message: "Order not found",
          },
        });
      }
      
      const updateData = { status };
      if (trackingNumber) {
        updateData.trackingNumber = trackingNumber;
      }
      
      const updatedOrder = await storage.updateOrder(orderId, updateData);
      
      // Send status update email
      try {
        const user = await storage.getUser(order.userId);
        await sendEmail({
          to: user.email,
          subject: "Order Status Update",
          template: "order-status-update",
          data: {
            name: `${user.firstName} ${user.lastName}`,
            orderNumber: order.orderNumber,
            status,
            trackingNumber,
          },
        });
      } catch (emailError) {
        console.error("Failed to send status update email:", emailError);
      }
      
      res.json({
        success: true,
        message: "Order status updated successfully",
        data: {
          order: updatedOrder,
        },
      });
    } catch (error) {
      console.error("Update order status error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_ORDER_STATUS_FAILED",
          message: "Failed to update order status",
        },
      });
    }
  },

  async cancelOrder(req, res) {
    try {
      const orderId = parseInt(req.params.id);
      const userId = req.user.id;
      
      const order = await storage.getOrder(orderId);
      
      if (!order) {
        return res.status(404).json({
          success: false,
          error: {
            code: "ORDER_NOT_FOUND",
            message: "Order not found",
          },
        });
      }
      
      // Check if user owns the order
      if (order.userId !== userId) {
        return res.status(403).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "You can only cancel your own orders",
          },
        });
      }
      
      // Check if order can be cancelled
      if (!["pending", "confirmed"].includes(order.status)) {
        return res.status(400).json({
          success: false,
          error: {
            code: "CANNOT_CANCEL_ORDER",
            message: "Order cannot be cancelled at this stage",
          },
        });
      }
      
      // Update order status
      const updatedOrder = await storage.updateOrder(orderId, {
        status: "cancelled",
      });
      
      // Restore inventory
      const items = await storage.getOrderItems(orderId);
      for (const item of items) {
        const product = await storage.getProduct(item.productId);
        if (product) {
          await storage.updateProduct(item.productId, {
            inventory: product.inventory + item.quantity,
          });
        }
      }
      
      res.json({
        success: true,
        message: "Order cancelled successfully",
        data: {
          order: updatedOrder,
        },
      });
    } catch (error) {
      console.error("Cancel order error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CANCEL_ORDER_FAILED",
          message: "Failed to cancel order",
        },
      });
    }
  },

  async returnOrder(req, res) {
    try {
      const orderId = parseInt(req.params.id);
      const userId = req.user.id;
      const { reason } = req.body;
      
      const order = await storage.getOrder(orderId);
      
      if (!order) {
        return res.status(404).json({
          success: false,
          error: {
            code: "ORDER_NOT_FOUND",
            message: "Order not found",
          },
        });
      }
      
      // Check if user owns the order
      if (order.userId !== userId) {
        return res.status(403).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "You can only return your own orders",
          },
        });
      }
      
      // Check if order can be returned (must be delivered)
      if (order.status !== "delivered") {
        return res.status(400).json({
          success: false,
          error: {
            code: "CANNOT_RETURN_ORDER",
            message: "Only delivered orders can be returned",
          },
        });
      }
      
      // Check return window (30 days)
      const deliveryDate = new Date(order.updatedAt);
      const returnWindow = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
      const now = new Date();
      
      if (now.getTime() - deliveryDate.getTime() > returnWindow) {
        return res.status(400).json({
          success: false,
          error: {
            code: "RETURN_WINDOW_EXPIRED",
            message: "Return window has expired (30 days)",
          },
        });
      }
      
      // Update order status
      const updatedOrder = await storage.updateOrder(orderId, {
        status: "returned",
        notes: reason,
      });
      
      res.json({
        success: true,
        message: "Return request submitted successfully",
        data: {
          order: updatedOrder,
        },
      });
    } catch (error) {
      console.error("Return order error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "RETURN_ORDER_FAILED",
          message: "Failed to process return request",
        },
      });
    }
  },
};
