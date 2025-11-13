import { Ong, Prisma } from '@prisma/client';

export interface IOngRepository {
    create(data: Prisma.OngCreateInput): Promise<Ong>;
    getOngById(id: string): Promise<Ong | null>;
    updateOngById(id: string, data: Prisma.OngUpdateInput): Promise<Ong>;
    deleteOngById(id: string): Promise<void>;
    getOngByEmail(email: string): Promise<Ong | null>;
}