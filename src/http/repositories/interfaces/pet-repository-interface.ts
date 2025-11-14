import { Pet, Prisma } from '@prisma/client';

export interface IPetRepository {
    create(data: Prisma.PetCreateInput): Promise<Pet>;
    getPetById(id: string): Promise<Pet | null>;
    updatePetById(id: string, data: Prisma.PetUpdateInput): Promise<Pet>;
    deletePetById(id: string): Promise<void>;
}