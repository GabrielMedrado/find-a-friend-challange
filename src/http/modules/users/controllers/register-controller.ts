import { FastifyRequest, FastifyReply } from 'fastify';
import { makeRegisterService } from '../services/factories/make-register-service';
import { UserAlreadyExistsError } from '@/http/errors/user-alredy-exists-error';
import { registerBodySchema } from '../dto/register-request.dto';

export async function registerController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
 
  const { name, email, password } = registerBodySchema.parse(request.body);

  try {
    const registerService = makeRegisterService();
    await registerService.execute({ name, email, password });
    
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(201).send();
}
