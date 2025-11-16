import { UsersRepository } from '@/http/repositories/prisma/prisma-users-repository';
import { AuthenticateService } from '../authenticate-service'; 

export function makeAuthenticateService(){
  const userRepository = new UsersRepository();
  const authenticateService = new AuthenticateService(userRepository);

  return authenticateService;
}