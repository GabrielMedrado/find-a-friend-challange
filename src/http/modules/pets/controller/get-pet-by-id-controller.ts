import { FastifyReply, FastifyRequest } from 'fastify';
import { getPetByIdBodySchema } from '../dto/get-pet-by-id-request.dto';
import { PetNotExistsError } from '@/http/errors/pet-not-exits-error';
import { makeGetPetByIdService } from '../services/factories/make-get-pet-by-id-serivece';


export async function getPetByIdController(req: FastifyRequest, res: FastifyReply){
  const {id} = getPetByIdBodySchema.parse(req.params);
  
  try {
    const getPetByIdService = makeGetPetByIdService();
    const petById = await getPetByIdService.execute(id);

    return res.status(200).send(petById); 
  } catch (error) {
    if(error instanceof PetNotExistsError){
      return res.status(404).send({message: error.message});
    }   
    throw error;
  }
}