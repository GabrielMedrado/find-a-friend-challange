import { OngRepository } from '@/http/repositories/prisma/prisma-ong-repository';
import { CreateOngService } from '../create-ong-service';


export function makeCreateOngService() {
  const ongRepository = new OngRepository();
  const createOngService = new CreateOngService(ongRepository);

  return createOngService;
}