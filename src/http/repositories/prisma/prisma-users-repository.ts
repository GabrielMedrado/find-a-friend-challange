import { User } from '@prisma/client';
import { IUsersRepository } from '../interfaces/users-repository-interface';
import { prisma } from '@/lib/prisma';

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
    
  async create(data: { name: string; email: string; password_hash: string; }): Promise<User> {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      }, 
    }); 
    return user;
  }
}