import { User } from '@prisma/client';

export interface IGetUserProfileServiceResponse {
  user: User;
}