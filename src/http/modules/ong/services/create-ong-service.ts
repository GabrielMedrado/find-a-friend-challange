import { hash } from 'bcryptjs';
import { OngRepository } from '@/http/repositories/prisma/prisma-ong-repository';
import { ICreateOngRequestDto } from '../dto/create-ong-request.dto';
import { ICreateOngResponseDto } from '../dto/create-ong-response.dto';
import { OngAlreadyExistsError } from '@/http/errors/ong-alredy-exists-error';

export class CreateOngService {
  constructor(
    private readonly ongRepository: OngRepository,
  ) {}

  async execute({nome_do_responsavel, email, cep, endereco, whatsapp, senha}: ICreateOngRequestDto): Promise<ICreateOngResponseDto> {
    const senha_hash = await hash(senha, 6);
    const ongWithSameEmail = await this.ongRepository.getOngByEmail(email);

    if (ongWithSameEmail) {
      throw new OngAlreadyExistsError();
    }
    
    const ong = await this.ongRepository.create({
      nome_do_responsavel,
      email,
      cep,
      endereco,
      whatsapp,
      senha_hash,
    });

    return {
      ong,
    };
  }
}