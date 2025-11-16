import { hash } from 'bcryptjs';
import { UserAlreadyExistsError } from '@/http/errors/user-alredy-exists-error';
import { IUsersRepository } from '@/http/repositories/interfaces/users-repository-interface';
import { IRegisterResponseDto } from '../dto/register-response.dto';
import { IRegisterUserRequestDto } from '../dto/register-request.dto';

export class RegisterService {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({
    name,
    email,
    password,
  }: IRegisterUserRequestDto): Promise<IRegisterResponseDto> {
    const password_hash = await hash(password, 6);

    const userWithTheSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithTheSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    });

    return {
      user,
    };
  }
}
