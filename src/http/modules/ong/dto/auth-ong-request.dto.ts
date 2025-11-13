import { z } from 'zod';

export interface IAuthOngRequestDto {
    email: string;
    senha: string;
}

export const authOngBodySchema = z.object({
  email: z
    .string()
    .trim(),

  senha: z
    .string()
    .nonempty(),
});

export type AuthOngBody = z.infer<typeof authOngBodySchema>;