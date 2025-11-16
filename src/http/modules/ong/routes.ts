import { FastifyInstance } from 'fastify';
import { createOngController } from './controller/create-ong-controller';
import { authOngController } from './controller/auth-ong-controller';
import { verifyUserRole } from '@/http/middlewares/verify-user-role';
import { verifyJWT } from '@/http/middlewares/verify-jwt';

export function ongRoutes(app: FastifyInstance) {
  app.post('/ong', {onRequest: [verifyJWT, verifyUserRole('ADMIN')]}, createOngController);
  app.post('/ong/auth', authOngController);
}