import { Injectable } from "@nestjs/common";
import { Prisma, Personagen } from "@prisma/client";
import { PersonagemRepository } from "src/personagens/repositories/personagem-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaPersonagemRepository implements PersonagemRepository {

    constructor(private prismaService: PrismaService) {

    }

    async create(data: Prisma.PersonagenCreateInput): Promise<Personagen> {
        throw new Error("Method not implemented.");
    }
    async getPersonagemById(id: string): Promise<Personagen | null> {
        throw new Error("Method not implemented.");
    }
    async updatePersonagemById(id: string): Promise<Personagen> {
        throw new Error("Method not implemented.");
    }
    async deletePersonagemById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}