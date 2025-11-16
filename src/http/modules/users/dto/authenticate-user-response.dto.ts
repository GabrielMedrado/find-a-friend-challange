import { User } from '@prisma/client';

export interface AuthenticateUserResponseDto {
  user: User;
}