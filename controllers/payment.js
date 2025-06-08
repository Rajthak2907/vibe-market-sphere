import { storage } from "../storage.js";
import { insertPaymentMethodSchema } from "../../shared/schema.js";

// Mock payment processing - In production, integrate with Stripe, PayPal, etc.
const processPayment = async (paymentMethod, amount, currency = "USD") => {
  // Simulate payment processing
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock success/failure based on amount (for testing)
      if (amount > 10000) { // Fail payments over $100 for testing
        reject(new Error("Payment declined"));
      } else {
        resolve({
          transactionId: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          status: "succeeded",
          amount,
          currency,
        });
      }
    }, 1000);
  });
};

export const paymentController = {
  async createPayment(req, res) {
    try {
      const { amount, currency = "USD", paymentMethodId, orderId } = req.body;
      
      if (!amount || !paymentMethodId) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Amount and payment method are required",
          },
        });
      }
      
      // Validate amount
      if (amount <= 0) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_AMOUNT",
            message: "Amount must be greater than 0",
          },
        });
      }
      
      // Get payment method
      const paymentMethod = await storage.getPaymentMethod(paymentMethodId);
      if (!paymentMethod || paymentMethod.userId !== req.user.id) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PAYMENT_METHOD_NOT_FOUND",
            message: "Payment method not found",
          },
        });
      }
      
      try {
        // Process payment
        const paymentResult = await processPayment(paymentMethod, amount, currency);
        
        // Update order if provided
        if (orderId) {
          const order = await storage.getOrder(orderId);
          if (order && order.userId === req.user.id) {
            await storage.updateOrder(orderId, {
              paymentStatus: "paid",
              paymentIntentId: paymentResult.transactionId,
              status: "confirmed",
            });
          }
        }
        
        res.json({
          success: true,
          message: "Payment processed successfully",
          data: {
            payment: {
              id: paymentResult.transactionId,
              status: paymentResult.status,
              amount: paymentResult.amount,
              currency: paymentResult.currency,
            },
          },
        });
      } catch (paymentError) {
        // Update order status to failed if applicable
        if (orderId) {
          const order = await storage.getOrder(orderId);
          if (order && order.userId === req.user.id) {
            await storage.updateOrder(orderId, {
              paymentStatus: "failed",
            });
          }
        }
        
        res.status(400).json({
          success: false,
          error: {
            code: "PAYMENT_FAILED",
            message: paymentError.message || "Payment processing failed",
          },
        });
      }
    } catch (error) {
      console.error("Create payment error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CREATE_PAYMENT_FAILED",
          message: "Failed to process payment",
        },
      });
    }
  },

  async confirmPayment(req, res) {
    try {
      const { paymentIntentId } = req.body;
      
      if (!paymentIntentId) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Payment intent ID is required",
          },
        });
      }
      
      // In a real implementation, you would verify the payment with the payment provider
      // For now, we'll just return a success response
      
      res.json({
        success: true,
        message: "Payment confirmed successfully",
        data: {
          paymentIntent: {
            id: paymentIntentId,
            status: "succeeded",
          },
        },
      });
    } catch (error) {
      console.error("Confirm payment error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CONFIRM_PAYMENT_FAILED",
          message: "Failed to confirm payment",
        },
      });
    }
  },

  async getPaymentMethods(req, res) {
    try {
      const userId = req.user.id;
      
      const paymentMethods = await storage.getUserPaymentMethods(userId);
      
      // Remove sensitive information
      const sanitizedPaymentMethods = paymentMethods.map(method => ({
        id: method.id,
        type: method.type,
        brand: method.brand,
        last4: method.last4,
        expiryMonth: method.expiryMonth,
        expiryYear: method.expiryYear,
        isDefault: method.isDefault,
        createdAt: method.createdAt,
      }));
      
      res.json({
        success: true,
        data: {
          paymentMethods: sanitizedPaymentMethods,
        },
      });
    } catch (error) {
      console.error("Get payment methods error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_PAYMENT_METHODS_FAILED",
          message: "Failed to get payment methods",
        },
      });
    }
  },

  async savePaymentMethod(req, res) {
    try {
      const userId = req.user.id;
      const validatedData = insertPaymentMethodSchema.parse(req.body);
      
      // If this is set as default, update other payment methods
      if (validatedData.isDefault) {
        const existingMethods = await storage.getUserPaymentMethods(userId);
        await Promise.all(
          existingMethods.map(method => 
            storage.updatePaymentMethod(method.id, { isDefault: false })
          )
        );
      }
      
      const paymentMethod = await storage.createPaymentMethod({
        ...validatedData,
        userId,
      });
      
      // Remove sensitive information from response
      const sanitizedPaymentMethod = {
        id: paymentMethod.id,
        type: paymentMethod.type,
        brand: paymentMethod.brand,
        last4: paymentMethod.last4,
        expiryMonth: paymentMethod.expiryMonth,
        expiryYear: paymentMethod.expiryYear,
        isDefault: paymentMethod.isDefault,
        createdAt: paymentMethod.createdAt,
      };
      
      res.status(201).json({
        success: true,
        message: "Payment method saved successfully",
        data: {
          paymentMethod: sanitizedPaymentMethod,
        },
      });
    } catch (error) {
      console.error("Save payment method error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "SAVE_PAYMENT_METHOD_FAILED",
          message: "Failed to save payment method",
        },
      });
    }
  },

  async deletePaymentMethod(req, res) {
    try {
      const userId = req.user.id;
      const paymentMethodId = parseInt(req.params.id);
      
      // Check if payment method belongs to user
      const paymentMethod = await storage.getPaymentMethod(paymentMethodId);
      if (!paymentMethod || paymentMethod.userId !== userId) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PAYMENT_METHOD_NOT_FOUND",
            message: "Payment method not found",
          },
        });
      }
      
      const deleted = await storage.deletePaymentMethod(paymentMethodId);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PAYMENT_METHOD_NOT_FOUND",
            message: "Payment method not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Payment method deleted successfully",
      });
    } catch (error) {
      console.error("Delete payment method error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "DELETE_PAYMENT_METHOD_FAILED",
          message: "Failed to delete payment method",
        },
      });
    }
  },

  async setDefaultPaymentMethod(req, res) {
    try {
      const userId = req.user.id;
      const paymentMethodId = parseInt(req.params.id);
      
      // Check if payment method belongs to user
      const paymentMethod = await storage.getPaymentMethod(paymentMethodId);
      if (!paymentMethod || paymentMethod.userId !== userId) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PAYMENT_METHOD_NOT_FOUND",
            message: "Payment method not found",
          },
        });
      }
      
      // Update all user's payment methods to not be default
      const existingMethods = await storage.getUserPaymentMethods(userId);
      await Promise.all(
        existingMethods.map(method => 
          storage.updatePaymentMethod(method.id, { isDefault: false })
        )
      );
      
      // Set the selected method as default
      const updatedPaymentMethod = await storage.updatePaymentMethod(paymentMethodId, {
        isDefault: true,
      });
      
      res.json({
        success: true,
        message: "Default payment method updated successfully",
        data: {
          paymentMethod: {
            id: updatedPaymentMethod.id,
            type: updatedPaymentMethod.type,
            brand: updatedPaymentMethod.brand,
            last4: updatedPaymentMethod.last4,
            isDefault: updatedPaymentMethod.isDefault,
          },
        },
      });
    } catch (error) {
      console.error("Set default payment method error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "SET_DEFAULT_PAYMENT_METHOD_FAILED",
          message: "Failed to set default payment method",
        },
      });
    }
  },
};
