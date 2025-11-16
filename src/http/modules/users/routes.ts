import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/http/middlewares/verify-jwt'; 
import { registerController } from './controllers/register-controller';
import { authenticateController } from './controllers/authenticate-controller';
import { profileController } from './controllers/get-user-profile-controller';
import { refreshTokenController } from './controllers/refresh-token-controller';

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', registerController);
  app.post('/sessions', authenticateController);

  app.patch('/token/refresh', refreshTokenController);

  //* Authenticated*/
  app.get('/me', { onRequest: [verifyJWT] }, profileController);
}
