import { Prisma, Pet } from '@prisma/client';
import { IPetRepository } from '../interfaces/pet-repository-interface';
import { prisma } from '@/lib/prisma';
import { ISearchPetRequestDto } from '@/http/modules/pets/dto/search-pets-request.dto';

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

  async findByCity(city: string): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({
      where: {
        cidade: city,
      },
    });
    return pets;
  }

  async searchMany(filters: ISearchPetRequestDto) {
    const {
      page,
      cidade,
      estado,
      porte,
      idade,
      ambiente: amb,
      nivelEnergia,
      nivelIndependencia,
    } = filters;

    const where: Prisma.PetWhereInput = {
      ...(cidade && {
        cidade: { contains: cidade, mode: 'insensitive' as const },
      }),
      ...(estado && {
        estado: { contains: estado, mode: 'insensitive' as const },
      }),
      ...(porte && { porte }),
      ...(idade && { idade }),
      ...(amb && { ambiente: amb }),
      ...(nivelEnergia && { nivelEnergia }),
      ...(nivelIndependencia && { nivelIndependencia }),
    };

    const pets = await prisma.pet.findMany({
      where,
      take: 20,
      skip: (page - 1) * 20,
    });

    return pets;
  }


}