import z from 'zod';

export interface IGetPetByIdRequestDto {
    id: string;
}

export const getPetByIdBodySchema = z.object({
  id: z.uuid(),
});