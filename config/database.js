/**
 * Database configuration for OBEYYO e-commerce API
 * Handles PostgreSQL connection settings and connection management
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../../shared/schema.js";

// Database configuration
const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  pool: {
    min: parseInt(process.env.DB_POOL_MIN) || 0,
    max: parseInt(process.env.DB_POOL_MAX) || 10,
    idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT) || 30000,
    connectionTimeoutMillis: parseInt(process.env.DB_CONNECTION_TIMEOUT) || 2000,
  },
};

// Validate database configuration
if (!config.connectionString) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Create database connection
let db;
let sql;

try {
  sql = neon(config.connectionString);
  db = drizzle(sql, { schema });
  console.log("Database connection initialized successfully");
} catch (error) {
  console.error("Failed to initialize database connection:", error);
  throw error;
}

/**
 * Get database instance
 * @returns {Object} Drizzle database instance
 */
export const getDatabase = () => {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
};

/**
 * Get SQL instance
 * @returns {Object} Neon SQL instance
 */
export const getSql = () => {
  if (!sql) {
    throw new Error("SQL connection not initialized");
  }
  return sql;
};

/**
 * Test database connection
 * @returns {Promise<boolean>} True if connection is successful
 */
export const testConnection = async () => {
  try {
    const result = await sql`SELECT 1 as test`;
    console.log("Database connection test successful:", result);
    return true;
  } catch (error) {
    console.error("Database connection test failed:", error);
    return false;
  }
};

/**
 * Get database connection info
 * @returns {Object} Connection information
 */
export const getConnectionInfo = () => {
  const url = new URL(config.connectionString);
  return {
    host: url.hostname,
    port: url.port || 5432,
    database: url.pathname.slice(1),
    user: url.username,
    ssl: config.ssl,
    pool: config.pool,
  };
};

/**
 * Close database connections (for graceful shutdown)
 * @returns {Promise<void>}
 */
export const closeConnections = async () => {
  try {
    // Neon serverless connections are automatically managed
    // No explicit close needed, but we can log the shutdown
    console.log("Database connections closed gracefully");
  } catch (error) {
    console.error("Error closing database connections:", error);
    throw error;
  }
};

/**
 * Execute a raw SQL query
 * @param {string} query - SQL query string
 * @param {Array} params - Query parameters
 * @returns {Promise<Array>} Query results
 */
export const executeRawQuery = async (query, params = []) => {
  try {
    const result = await sql(query, ...params);
    return result;
  } catch (error) {
    console.error("Raw query execution failed:", error);
    throw error;
  }
};

/**
 * Execute multiple queries in a transaction
 * @param {Function} callback - Function containing database operations
 * @returns {Promise<*>} Transaction result
 */
export const executeTransaction = async (callback) => {
  try {
    return await db.transaction(async (tx) => {
      return await callback(tx);
    });
  } catch (error) {
    console.error("Transaction failed:", error);
    throw error;
  }
};

/**
 * Get database statistics
 * @returns {Promise<Object>} Database statistics
 */
export const getDatabaseStats = async () => {
  try {
    const stats = await sql`
      SELECT 
        schemaname,
        tablename,
        n_tup_ins as inserts,
        n_tup_upd as updates,
        n_tup_del as deletes
      FROM pg_stat_user_tables
      ORDER BY schemaname, tablename
    `;
    
    return stats;
  } catch (error) {
    console.error("Failed to get database statistics:", error);
    throw error;
  }
};

/**
 * Check if database is healthy
 * @returns {Promise<Object>} Health check result
 */
export const checkDatabaseHealth = async () => {
  try {
    const start = Date.now();
    await sql`SELECT 1`;
    const responseTime = Date.now() - start;
    
    return {
      status: "healthy",
      responseTime: `${responseTime}ms`,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      status: "unhealthy",
      error: error.message,
      timestamp: new Date().toISOString(),
    };
  }
};

/**
 * Migration utilities
 */
export const migrations = {
  /**
   * Run pending migrations
   * @returns {Promise<void>}
   */
  async run() {
    console.log("Migrations are handled by Drizzle Kit");
    console.log("Run 'npm run db:push' to sync schema changes");
  },

  /**
   * Check migration status
   * @returns {Promise<Object>} Migration status
   */
  async status() {
    try {
      // Check if main tables exist
      const tables = await sql`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_type = 'BASE TABLE'
      `;
      
      const tableNames = tables.map(t => t.table_name);
      const expectedTables = [
        'users', 'categories', 'brands', 'products', 
        'addresses', 'orders', 'order_items', 'cart', 
        'wishlist', 'reviews', 'banners', 'coupons', 
        'payment_methods'
      ];
      
      const missingTables = expectedTables.filter(table => !tableNames.includes(table));
      
      return {
        tablesFound: tableNames.length,
        expectedTables: expectedTables.length,
        missingTables,
        isComplete: missingTables.length === 0,
      };
    } catch (error) {
      console.error("Failed to check migration status:", error);
      throw error;
    }
  },
};

/**
 * Database configuration export
 */
export const databaseConfig = {
  ...config,
  getDatabase,
  getSql,
  testConnection,
  getConnectionInfo,
  closeConnections,
  executeRawQuery,
  executeTransaction,
  getDatabaseStats,
  checkDatabaseHealth,
  migrations,
};

export default databaseConfig;
