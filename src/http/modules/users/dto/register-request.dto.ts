import z from 'zod';

export interface IRegisterUserRequestDto {
  name: string;
  email: string;
  password: string;
}

export const registerBodySchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string().min(6),
});
