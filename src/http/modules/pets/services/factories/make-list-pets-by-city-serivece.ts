import { PetRepository } from '@/http/repositories/prisma/prisma-pet-repository';
import { ListPetsByCityService } from '../list-pets-by-city';

export function makeListPetsByCityService() {
  const petRepository = new PetRepository();
  const listPetsByCityService = new ListPetsByCityService(petRepository);

  return listPetsByCityService;
}