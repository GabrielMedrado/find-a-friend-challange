import z from 'zod';

export const listPetsByCityBodySchema = z.object({
  city: z.string(),
});