import { PetRepository } from '@/http/repositories/prisma/prisma-pet-repository';


export class ListPetsByCityService {
  constructor(
    private  petsRepository: PetRepository,
  ) {}

  async execute(city: string) {
    const pets = await this.petsRepository.findByCity(city);

    return pets;
  }
}