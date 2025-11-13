import { InvalidCredentialsError } from '@/http/errors/invalid-credentials-error';
import { OngRepository } from '@/http/repositories/prisma/prisma-ong-repository';
import { compare } from 'bcryptjs';

export class AuthOngService {
  constructor(
    private readonly ongRepository: OngRepository,
  ) {}

  async execute(email: string, senha: string) {
    const ong = await this.ongRepository.getOngByEmail(email);

    if (!ong) {
      throw new InvalidCredentialsError();
    }

    const doesPasswordMatches = await compare(senha, ong.senha_hash);

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError();
    }

    return {
      ong,
    };
  }
}