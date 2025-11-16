import { PetNotExistsError } from '@/http/errors/pet-not-exits-rror';
import { PetRepository } from '@/http/repositories/prisma/prisma-pet-repository';

export class GetPetByIdService {
  constructor(
        private petRepository: PetRepository,
  ) {}

  async execute(id: string) {
    const existsPet = await this.petRepository.getPetById(id);

    if (!existsPet) {
      throw new PetNotExistsError();
    }

    return {
      pet: existsPet,
    };
  }
}