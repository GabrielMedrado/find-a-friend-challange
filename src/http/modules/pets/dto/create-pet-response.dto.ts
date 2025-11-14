import {Pet } from '@prisma/client';

export interface ICreatePetResponseDto {
    pet: Pet
}