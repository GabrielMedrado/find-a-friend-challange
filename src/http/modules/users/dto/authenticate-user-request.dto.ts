import z from 'zod';

export interface AuthenticateUserRequestDto {
  email: string;
  password: string;
}

export const authenticateBodySchema = z.object({
  email: z.string(),
  password: z.string().min(6),
}); 