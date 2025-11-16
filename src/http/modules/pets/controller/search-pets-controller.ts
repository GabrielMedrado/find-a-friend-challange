import { FastifyReply, FastifyRequest } from 'fastify';
import { searchPetsQuerySchema } from '../dto/search-pets-request.dto';
import { makeSearchPetsService } from '../services/factories/make-search-pets-serivece';

export async function searchPetsController(req: FastifyRequest, res: FastifyReply){
  const filters  = searchPetsQuerySchema.parse(req.query);
  
  const searchPetsService = makeSearchPetsService();
    
  const { pets } = await searchPetsService.execute(filters);

  return res.status(200).send({
    pets,
  });
 
}