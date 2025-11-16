import { User } from '@prisma/client';

export interface IRegisterResponseDto {
  user: User;
}