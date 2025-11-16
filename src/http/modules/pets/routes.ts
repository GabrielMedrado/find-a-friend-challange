import { FastifyInstance } from 'fastify';
import { createPetController } from './controller/create-pet-controller';
import { verifyUserRole } from '@/http/middlewares/verify-user-role';
import { getPetByIdController } from './controller/get-pet-by-id-controller';
import { verifyJWT } from '@/http/middlewares/verify-jwt';
import { listPetByCityController } from './controller/list-pets-city-controller';
import { searchPetsController } from './controller/search-pets-controller';

export function petRoutes(app: FastifyInstance){  
  app.post('/pet', {onRequest: [verifyJWT, verifyUserRole('ONG')]}, createPetController);
  
  app.get('/pet/:id', getPetByIdController);
  app.get('/pets/city/:city', listPetByCityController);
  app.get('/pets/search', searchPetsController);
}