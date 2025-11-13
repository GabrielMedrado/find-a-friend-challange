import { Ong, Prisma } from '@prisma/client';
import { IOngRepository } from '../interfaces/ong-repository-interface';
import { prisma } from '@/lib/prisma';

export class OngRepository implements IOngRepository {
  async create(data: Prisma.OngCreateInput): Promise<Ong> {
    const newOng = await prisma.ong.create({
      data,
    });
    return newOng;
  }

  async getOngById(id: string): Promise<Ong | null> {
    const ongById = await prisma.ong.findUnique({
      where: {
        id,
      },
    });
    return ongById;
  }

  async updateOngById(id: string, data: Prisma.OngUpdateInput): Promise<Ong> {
    const updatedOng = await prisma.ong.update({
      where: {
        id,
      },
      data,
    });
    return updatedOng;
  }

  async getOngByEmail(email: string): Promise<Ong | null> {
    const ongByEmail = await prisma.ong.findUnique({
      where: {
        email,
      },
    });
    return ongByEmail;
  }

  async deleteOngById(id: string): Promise<void> {
    await prisma.ong.delete({
      where: {
        id,
      },
    });
  }
}