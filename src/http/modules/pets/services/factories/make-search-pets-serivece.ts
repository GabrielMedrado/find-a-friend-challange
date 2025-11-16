import { PetRepository } from '@/http/repositories/prisma/prisma-pet-repository';
import { SearchPetsService } from '../search-pets';

export function makeSearchPetsService() {
  const petRepository = new PetRepository();
  const searchPetsService = new SearchPetsService(petRepository);

  return searchPetsService;
}