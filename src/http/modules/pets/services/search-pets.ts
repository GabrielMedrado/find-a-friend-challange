import { PetRepository } from '@/http/repositories/prisma/prisma-pet-repository';
import { ISearchPetRequestDto } from '../dto/search-pets-request.dto';
import { ISearchPetResponseDto } from '../dto/search-pets-response.dto';

export class SearchPetsService {
  constructor(private petRepository: PetRepository) {}

  async execute(filters: ISearchPetRequestDto): Promise<ISearchPetResponseDto> {
    const pets = await this.petRepository.searchMany(filters);

    return { pets };
  }
}