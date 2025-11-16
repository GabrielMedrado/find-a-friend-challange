import { Pet } from '@prisma/client';

export interface ISearchPetResponseDto {
  pets: Pet[];
}
