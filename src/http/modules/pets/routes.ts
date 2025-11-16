import { FastifyInstance } from 'fastify';
import { createPetController } from './controller/create-pet-controller';
import { verifyUserRole } from '@/http/middlewares/verify-user-role';
import { verifyJWT } from '@/http/middlewares/verify-jwt';
import { getPetByIdController } from './controller/get-pet-by-id-controller';

export function petRoutes(app: FastifyInstance){
  app.addHook('onRequest', verifyJWT);  
  
  app.post('/pet', {'onRequest': verifyUserRole('ADMIN')}, createPetController);
  app.get('/pet/:id', getPetByIdController);
}