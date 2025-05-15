import { AnyZodObject } from 'zod';
import { RequestHandler } from 'express';

export const validateRequest = (schema: AnyZodObject): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params
    });

    if (!result.success) {
      const errors = result.error.errors.map(e => ({
        path: e.path.join('.'),
        message: e.message
      }));
      res.status(400).json({ errors }); 
      return; 
    }
    next();
  };
};