import { storage } from "../storage.js";

export const adminController = {
  async getUsers(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const role = req.query.role;
      
      let { users, total } = await storage.getAllUsers(page, limit);
      
      // Filter by role if specified
      if (role) {
        users = users.filter(user => user.role === role);
        total = users.length;
      }
      
      // Remove sensitive information
      const sanitizedUsers = users.map(user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        emailVerified: user.emailVerified,
        isActive: user.isActive,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
      }));
      
      res.json({
        success: true,
        data: {
          users: sanitizedUsers,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
          },
        },
      });
    } catch (error) {
      console.error("Get users error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_USERS_FAILED",
          message: "Failed to get users",
        },
      });
    }
  },

  async updateUserStatus(req, res) {
    try {
      const userId = parseInt(req.params.id);
      const { isActive } = req.body;
      
      if (typeof isActive !== "boolean") {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_STATUS",
            message: "isActive must be a boolean value",
          },
        });
      }
      
      const updatedUser = await storage.updateUser(userId, { isActive });
      
      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          error: {
            code: "USER_NOT_FOUND",
            message: "User not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: `User ${isActive ? "activated" : "deactivated"} successfully`,
        data: {
          user: {
            id: updatedUser.id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            role: updatedUser.role,
            isActive: updatedUser.isActive,
          },
        },
      });
    } catch (error) {
      console.error("Update user status error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_USER_STATUS_FAILED",
          message: "Failed to update user status",
        },
      });
    }
  },

  async deleteUser(req, res) {
    try {
      const userId = parseInt(req.params.id);
      
      // Prevent deleting the current admin user
      if (userId === req.user.id) {
        return res.status(400).json({
          success: false,
          error: {
            code: "CANNOT_DELETE_SELF",
            message: "You cannot delete your own account",
          },
        });
      }
      
      const deleted = await storage.deleteUser(userId);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: {
            code: "USER_NOT_FOUND",
            message: "User not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
      console.error("Delete user error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "DELETE_USER_FAILED",
          message: "Failed to delete user",
        },
      });
    }
  },
};
