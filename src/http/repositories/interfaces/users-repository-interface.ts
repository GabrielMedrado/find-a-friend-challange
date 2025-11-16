import { User } from '@prisma/client';

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | null>;
    create(data: { name: string; email: string; password_hash: string }): Promise<User>;
    findById(id: string): Promise<User | null>;
}