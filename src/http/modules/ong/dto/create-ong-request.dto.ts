import { z } from 'zod';

export interface ICreateOngRequestDto {
    nome_do_responsavel: string;
    email: string;
    cep: string;
    endereco: string;
    whatsapp: string;
    senha: string;
}


export const createOngBodySchema = z.object({
  nome_do_responsavel: z
    .string()
    .trim()
    .min(1, 'Nome do responsável é obrigatório'),

  email: z
    .string()
    .trim(),

  cep: z
    .string()
    .trim()
    .regex(/^\d{8}$|^\d{5}-\d{3}$/, 'CEP inválido'),

  endereco: z
    .string()
    .trim()
    .min(1, 'Endereço é obrigatório'),

  whatsapp: z
    .string()
    .trim()
    .regex(/^\d{10,11}$/, 'Whatsapp deve ter 10 ou 11 dígitos'),

  senha: z
    .string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export type CreateOngBody = z.infer<typeof createOngBodySchema>;