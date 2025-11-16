import { FastifyRequest, FastifyReply } from 'fastify';
import { makeAuthenticateService } from '../services/factories/make-authenticate-service';
import { InvalidCredentialsError } from '@/http/errors/invalid-credentials-error';
import { authenticateBodySchema } from '../dto/authenticate-user-request.dto';
 
export async function authenticateController(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const { email, password } = authenticateBodySchema.parse(request.body);

  try {
    const authenticateService = makeAuthenticateService();

    const { user } = await authenticateService.execute({
      email,
      password,
    });

    const token = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
        },
      },
    );

    const refreshToken = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
          expiresIn: '7d',
        },
      },
    );

    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({ token });
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message });
    }

    throw error;
  }
}
