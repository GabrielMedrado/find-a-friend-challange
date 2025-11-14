import { Prisma, Pet } from '@prisma/client';
import { IPetRepository } from '../interfaces/pet-repository-interface';
import { prisma } from '@/lib/prisma';

export class PetRepository implements IPetRepository {
  async create(data: Prisma.PetCreateInput): Promise<Pet> {
    const newPet = await prisma.pet.create({
      data,
    });
    return newPet;
  }

  async getPetById(id: string): Promise<Pet | null> {
    const petById = await prisma.pet.findUnique({
      where: {
        id,
      },
    });
    return petById;
  }

  async updatePetById(id: string, data: Prisma.PetUpdateInput): Promise<Pet> {
    const updatedPet = await prisma.pet.update({
      where: {
        id,
      },
      data,
    });
    return updatedPet;
  }

  async deletePetById(id: string): Promise<void> {
    await prisma.pet.delete({
      where: {
        id,
      },
    });
  }
}