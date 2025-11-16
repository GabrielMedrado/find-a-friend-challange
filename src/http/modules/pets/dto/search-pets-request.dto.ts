import { Porte, Idade, ambiente, nivelEnergia, nivelIdependencia } from '@prisma/client';
import z from 'zod';

export interface ISearchPetRequestDto {
  cidade?: string | undefined;
  estado?: string | undefined;

  porte?: Porte | undefined;
  idade?: Idade | undefined;
  ambiente?: ambiente | undefined;
  nivelEnergia?: nivelEnergia | undefined;
  nivelIndependencia?: nivelIdependencia | undefined; 

  page: number;
}

export const searchPetsQuerySchema = z.object({
  cidade: z.string().min(2).max(100).optional(),
  estado: z.string().min(2).max(100).optional(),

  porte: z.enum(Porte).optional(),
  idade: z.enum(Idade).optional(),
  ambiente: z.enum(ambiente).optional(),
  nivelEnergia: z.enum(nivelEnergia).optional(),
  nivelIndependencia: z.enum(nivelIdependencia).optional(),

  page: z.coerce.number().min(1).default(1),
});