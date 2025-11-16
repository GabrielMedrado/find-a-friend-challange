import { FastifyReply, FastifyRequest } from 'fastify';
import { listPetsByCityBodySchema } from '../dto/list-pets-by-city-request.dto';
import { PetNotExistsByCityError } from '@/http/errors/pet-not-exits-by-city-error';
import { makeListPetsByCityService } from '../services/factories/make-list-pets-by-city-serivece';

export async function listPetByCityController(req: FastifyRequest, res: FastifyReply){
  const {city} = listPetsByCityBodySchema.parse(req.params);
  
  try {
    const listPetsByCityService = makeListPetsByCityService();
    const petsByCity = await listPetsByCityService.execute(city);

    if (petsByCity.length === 0){
      throw new PetNotExistsByCityError();
    }

    return res.status(200).send(petsByCity); 
  } catch (error) {
    if(error instanceof PetNotExistsByCityError){
      return res.status(404).send({message: error.message});
    }   
    throw error;
  }
}