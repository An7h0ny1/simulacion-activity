import { z } from 'zod';

export const createActivitySchema = z.object({
  body: z.object({
    userId: z.string().uuid({ message: 'userId debe ser un UUID válido' }),
    event: z.string().min(1, { message: 'event es requerido' }),
    detail: z.string().optional()
  })
});

export type CreateActivityInput = z.infer<typeof createActivitySchema>['body'];
