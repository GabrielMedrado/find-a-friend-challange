import { PetRepository } from '@/http/repositories/prisma/prisma-pet-repository';
import { ICreatePetRequestDto } from '../dto/create-pet-request.dto';
import { ICreatePetResponseDto } from '../dto/create-pet-response.dto';

export class CreatePetService {
  constructor(
    private petRepository: PetRepository,
  ){}

  async execute({ nome, sobre, idade, porte, nivelEnergia, nivelIndependencia, ambiente, foto, requisito, ongId }: ICreatePetRequestDto): Promise<ICreatePetResponseDto> {

    const pet = await this.petRepository.create({
      nome,
      sobre,
      idade,
      porte,
      nivelEnergia,
      nivelIndependencia,
      ambiente,
      foto,
      requisito,
      ongs: {
        connect: {
          id: ongId,
        },
      },
    });

    return {
      pet,
    };
  }

}