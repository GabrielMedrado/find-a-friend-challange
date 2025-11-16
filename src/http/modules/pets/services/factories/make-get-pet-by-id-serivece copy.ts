import { PetRepository } from '@/http/repositories/prisma/prisma-pet-repository';
import { GetPetByIdService } from '../get-pet-by-id';

export function makeGetPetByIdService() {
  const petRepository = new PetRepository();
  const getPetByIdService = new GetPetByIdService(petRepository);

  return getPetByIdService;
}