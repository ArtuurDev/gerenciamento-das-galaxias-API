import { Personagen, Prisma } from "@prisma/client";

export abstract class PersonagemRepository {
    abstract create(data: Prisma.PersonagenCreateInput): Promise<Personagen>
    abstract getPersonagemById(id: string): Promise<Personagen | null>
    abstract updatePersonagemById(id: string): Promise<Personagen>
    abstract deletePersonagemById(id: string): Promise<any>
}