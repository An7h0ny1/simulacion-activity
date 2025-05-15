import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req,
  res,
  next
) => {
  console.error(err);

  // Manejo de errores de Prisma
  if (err.code && err.meta) {
    res.status(400).json({
      message: 'Database error',
      details: process.env.NODE_ENV === 'development' ? err.meta : undefined
    });
    return;
  }

  // Manejo de errores de validación (Zod/Joi)
  if (err.errors) {
    res.status(400).json({
      message: 'Validation error',
      errors: err.errors
    });
    return;
  }

  // Otros errores
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};