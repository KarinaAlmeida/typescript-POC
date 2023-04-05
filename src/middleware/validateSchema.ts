import err from "../errors/index.js";

import { NextFunction } from "express";
import { Schema } from "joi";
import { Request, Response } from "express-serve-static-core";

export function validateSchema(schema:Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      throw err.conflictError(errors);
    }

    next();
  };
}