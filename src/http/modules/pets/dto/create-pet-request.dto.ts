import { ambiente, Idade, nivelEnergia, nivelIdependencia, Porte } from '@prisma/client';
import z from 'zod';

export interface ICreatePetRequestDto {
    nome: string;
    sobre: string;
    idade: Idade;
    porte:              Porte;
    nivelEnergia:       nivelEnergia;
    nivelIndependencia: nivelIdependencia;
    ambiente:           ambiente;
    foto:               string;
    requisito:          string;
    ongId:              string;
}

export const createPetBodySchema = z.object({
  nome: z.string().trim().nonempty(),
  sobre: z.string().trim().nonempty(),
  idade: z.enum(Idade),
  porte: z.enum(Porte),
  nivelEnergia: z.enum(nivelEnergia),
  nivelIndependencia: z.enum(nivelIdependencia),
  ambiente: z.enum(ambiente),
  foto: z.string(),
  requisito: z.string().trim().nonempty(),
});