import { FastifyInstance } from 'fastify';
import { createOngController } from './controller/create-ong-controller';
import { authOngController } from './controller/auth-ong-controller';

export function ongRoutes(app: FastifyInstance) {
  app.post('/ong', createOngController);
  app.post('/ong/auth', authOngController);
}