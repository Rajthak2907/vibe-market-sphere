/**
 * Pagination utility functions for the OBEYYO e-commerce API
 * Provides consistent pagination across all endpoints
 */

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;
export const MAX_LIMIT = 100;

/**
 * Create pagination parameters from query string
 * @param {Object} query - Request query parameters
 * @param {Object} options - Optional configuration
 * @returns {Object} Validated pagination parameters
 */
export const getPaginationParams = (query = {}, options = {}) => {
  const {
    defaultLimit = DEFAULT_LIMIT,
    maxLimit = MAX_LIMIT,
    defaultPage = DEFAULT_PAGE,
  } = options;

  let page = parseInt(query.page) || defaultPage;
  let limit = parseInt(query.limit) || defaultLimit;

  // Ensure page is at least 1
  page = Math.max(1, page);

  // Ensure limit is within bounds
  limit = Math.max(1, Math.min(maxLimit, limit));

  // Calculate offset for database queries
  const offset = (page - 1) * limit;

  return {
    page,
    limit,
    offset,
  };
};

/**
 * Create pagination metadata for API responses
 * @param {number} page - Current page number
 * @param {number} limit - Items per page
 * @param {number} total - Total number of items
 * @returns {Object} Pagination metadata
 */
export const createPaginationMeta = (page, limit, total) => {
  const pages = Math.ceil(total / limit);
  
  return {
    page,
    limit,
    total,
    pages,
    hasNext: page < pages,
    hasPrev: page > 1,
    nextPage: page < pages ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null,
  };
};

/**
 * Create paginated response object
 * @param {Array} data - Array of items for current page
 * @param {number} page - Current page number
 * @param {number} limit - Items per page
 * @param {number} total - Total number of items
 * @returns {Object} Paginated response
 */
export const createPaginatedResponse = (data, page, limit, total) => {
  return {
    data,
    pagination: createPaginationMeta(page, limit, total),
  };
};

/**
 * Apply pagination to an array of data
 * @param {Array} data - Full dataset
 * @param {number} page - Page number
 * @param {number} limit - Items per page
 * @returns {Object} Paginated result
 */
export const paginateArray = (data, page = DEFAULT_PAGE, limit = DEFAULT_LIMIT) => {
  const total = data.length;
  const offset = (page - 1) * limit;
  const paginatedData = data.slice(offset, offset + limit);
  
  return createPaginatedResponse(paginatedData, page, limit, total);
};

/**
 * Generate pagination links for API responses
 * @param {string} baseUrl - Base URL for the endpoint
 * @param {number} page - Current page
 * @param {number} limit - Items per page
 * @param {number} total - Total items
 * @param {Object} queryParams - Additional query parameters
 * @returns {Object} Pagination links
 */
export const createPaginationLinks = (baseUrl, page, limit, total, queryParams = {}) => {
  const pages = Math.ceil(total / limit);
  
  const buildUrl = (pageNum) => {
    const params = new URLSearchParams({
      ...queryParams,
      page: pageNum.toString(),
      limit: limit.toString(),
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const links = {
    self: buildUrl(page),
    first: buildUrl(1),
    last: buildUrl(pages),
  };

  if (page > 1) {
    links.prev = buildUrl(page - 1);
  }

  if (page < pages) {
    links.next = buildUrl(page + 1);
  }

  return links;
};

/**
 * Validate pagination parameters and throw errors if invalid
 * @param {number} page - Page number
 * @param {number} limit - Items per page
 * @param {Object} options - Validation options
 * @throws {Error} If parameters are invalid
 */
export const validatePaginationParams = (page, limit, options = {}) => {
  const { maxLimit = MAX_LIMIT } = options;

  if (!Number.isInteger(page) || page < 1) {
    throw new Error("Page must be a positive integer");
  }

  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error("Limit must be a positive integer");
  }

  if (limit > maxLimit) {
    throw new Error(`Limit cannot exceed ${maxLimit}`);
  }
};

/**
 * Create pagination middleware for Express routes
 * @param {Object} options - Middleware options
 * @returns {Function} Express middleware function
 */
export const paginationMiddleware = (options = {}) => {
  return (req, res, next) => {
    try {
      const pagination = getPaginationParams(req.query, options);
      validatePaginationParams(pagination.page, pagination.limit, options);
      
      req.pagination = pagination;
      next();
    } catch (error) {
      res.status(400).json({
        success: false,
        error: {
          code: "INVALID_PAGINATION",
          message: error.message,
        },
      });
    }
  };
};

/**
 * Calculate pagination statistics
 * @param {number} page - Current page
 * @param {number} limit - Items per page
 * @param {number} total - Total items
 * @returns {Object} Pagination statistics
 */
export const getPaginationStats = (page, limit, total) => {
  const pages = Math.ceil(total / limit);
  const startItem = total === 0 ? 0 : (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  return {
    startItem,
    endItem,
    totalItems: total,
    totalPages: pages,
    currentPage: page,
    itemsPerPage: limit,
    isFirstPage: page === 1,
    isLastPage: page === pages,
  };
};

/**
 * Get pagination range for UI components
 * @param {number} currentPage - Current page number
 * @param {number} totalPages - Total number of pages
 * @param {number} delta - Number of pages to show around current page
 * @returns {Array} Array of page numbers to display
 */
export const getPaginationRange = (currentPage, totalPages, delta = 2) => {
  const range = [];
  const rangeWithDots = [];

  // Calculate the range of pages to show
  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  // Always include first page
  range.push(1);

  // Add pages in the calculated range
  for (let page = left; page <= right; page++) {
    range.push(page);
  }

  // Always include last page if there's more than one page
  if (totalPages > 1) {
    range.push(totalPages);
  }

  // Remove duplicates and sort
  const uniqueRange = [...new Set(range)].sort((a, b) => a - b);

  // Add dots where there are gaps
  for (let i = 0; i < uniqueRange.length; i++) {
    const current = uniqueRange[i];
    const next = uniqueRange[i + 1];

    rangeWithDots.push(current);

    if (next && next - current > 1) {
      rangeWithDots.push("...");
    }
  }

  return rangeWithDots;
};
