import { ISearchPetRequestDto } from '@/http/modules/pets/dto/search-pets-request.dto';
import { Pet, Prisma } from '@prisma/client';

export interface IPetRepository {
    create(data: Prisma.PetCreateInput): Promise<Pet>;
    getPetById(id: string): Promise<Pet | null>;
    updatePetById(id: string, data: Prisma.PetUpdateInput): Promise<Pet>;
    deletePetById(id: string): Promise<void>;
    findByCity(city: string): Promise<Pet[]>;
    searchMany(filters: ISearchPetRequestDto): Promise<Pet[]>;
}