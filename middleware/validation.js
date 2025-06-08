import { ZodError } from "zod";

export const validateRequest = (schema, source = "body") => {
  return (req, res, next) => {
    try {
      const data = source === "body" ? req.body : 
                  source === "query" ? req.query : 
                  source === "params" ? req.params : req.body;
      
      const validatedData = schema.parse(data);
      
      if (source === "body") req.body = validatedData;
      else if (source === "query") req.query = validatedData;
      else if (source === "params") req.params = validatedData;
      
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Validation failed",
            details: error.errors.map(err => ({
              field: err.path.join("."),
              message: err.message,
            })),
          },
        });
      }
      
      next(error);
    }
  };
};
