import { FastifyReply, FastifyRequest } from 'fastify';
import { createOngBodySchema } from '../dto/create-ong-request.dto';
import { makeCreateOngService } from '../services/factorie/make-create-ong-service';
import { OngAlreadyExistsError } from '@/http/errors/ong-alredy-exists-error';

export async function createOngController(req: FastifyRequest, res: FastifyReply){
  const body = createOngBodySchema.parse(req.body);

  try{
    const createOngService = makeCreateOngService();
    await createOngService.execute(body);

  } catch(error) {
    if (error instanceof OngAlreadyExistsError ) {
      return res.status(409).send({ message: error.message });
    }
    throw error;
  }

  return res.status(201).send();
}