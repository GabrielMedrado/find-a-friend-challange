import { FastifyReply, FastifyRequest } from 'fastify';
import { createPetBodySchema } from '../dto/create-pet-request.dto';
import { makecreatePetService } from '../services/factories/make-create-pet-serivece';

export async function createPetController(req: FastifyRequest, res: FastifyReply){
  const { nome, sobre, idade, porte, nivelEnergia, nivelIndependencia, ambiente, foto, requisito, cidade, estado } = createPetBodySchema.parse(req.body);
  const ongId = req.user.sub as string;

  try {
    const createPetService = makecreatePetService();
    const newPet = await createPetService.execute({
      nome, sobre, idade, porte, nivelEnergia, nivelIndependencia, ambiente, foto, requisito, cidade, estado, ongId,
    });

    return res.status(201).send(newPet);
  } catch (error) {
    if(error){
      throw new Error('Erro ao criar pet');
    }    
  }
}