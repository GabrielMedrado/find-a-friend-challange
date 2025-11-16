import { FastifyInstance } from 'fastify';
import { createOngController } from './controller/create-ong-controller';
import { authOngController } from './controller/auth-ong-controller';
import { verifyUserRole } from '@/http/middlewares/verify-user-role';

export function ongRoutes(app: FastifyInstance) {
  app.post('/ong', {onRequest: verifyUserRole('ADMIN')}, createOngController);
  app.post('/ong/auth', {onRequest: verifyUserRole('ONG')}, authOngController);
}