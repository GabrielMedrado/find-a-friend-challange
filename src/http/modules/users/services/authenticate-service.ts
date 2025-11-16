import { compare } from 'bcryptjs';
import { InvalidCredentialsError } from '@/http/errors/invalid-credentials-error';
import { IUsersRepository } from '@/http/repositories/interfaces/users-repository-interface';
import { AuthenticateUserRequestDto } from '../dto/authenticate-user-request.dto';
import { AuthenticateUserResponseDto } from '../dto/authenticate-user-response.dto';

export class AuthenticateService {
  constructor(private userRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUserRequestDto): Promise<AuthenticateUserResponseDto> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const doesPasswordMatches = await compare(password, user.password_hash);

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError();
    }

    return { user };
  }
}
