import { OngRepository } from '@/http/repositories/prisma/prisma-ong-repository';
import { AuthOngService } from '../auth-ong-service';

export function makeAuthOngService() {
  const ongRepository = new OngRepository();
  const authOngService = new AuthOngService(ongRepository);

  return authOngService;
}