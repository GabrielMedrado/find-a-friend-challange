import { PetRepository } from '@/http/repositories/prisma/prisma-pet-repository';
import { CreatePetService } from '../create-pet-service';

export function makecreatePetService() {
  const petRepository = new PetRepository();
  const createPetService = new CreatePetService(petRepository);

  return createPetService;
}