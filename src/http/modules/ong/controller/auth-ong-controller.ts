import { FastifyReply, FastifyRequest } from 'fastify';
import { authOngBodySchema } from '../dto/auth-ong-request.dto';
import { makeAuthOngService } from '../services/factorie/make-auth-ong-service';
import { InvalidCredentialsError } from '@/http/errors/invalid-credentials-error';

export async function authOngController(req: FastifyRequest, res: FastifyReply) {
  const body = authOngBodySchema.parse(req.body);

  try {
    const authOngService = makeAuthOngService();
    const auth = await authOngService.execute(body.email, body.senha);

    const token = await res.jwtSign(
      {
        role: auth.ong.role,
      },
      {
        sign: {
          sub: auth.ong.id,
        },
      },
    );

    return res.status(200).send({ token });

  } catch(error) {
    if (error instanceof InvalidCredentialsError ) {
      return res.status(401).send({ message: error.message });
    }
    throw error;
  }
}