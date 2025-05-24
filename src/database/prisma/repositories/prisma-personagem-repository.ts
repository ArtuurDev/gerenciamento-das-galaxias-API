import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CharacterRepository } from "src/character/repositories/character-repository";
import { Prisma, Character } from "@prisma/client";

@Injectable()
export class PrismaCharacterRepository implements CharacterRepository {

    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.CharacterCreateInput): Promise<Character> {
        return this.prismaService.character.create({
            data
        })
    }

    async getCharacterById(id: string): Promise<Character | null> {
        return this.prismaService.character.findUnique({
            where: {
                id
            }
        })
    }

    async updateCharacterById(data: Partial<Character>, id: string): Promise<Character> {
        return this.prismaService.character.update({
            where: {
                id
            }, 
            data
        })
    }

    async deleteCharacterById(id: string): Promise<any> {
        return this.prismaService.character.delete({
            where: {
                id
            }
        })
    }

    async getCharacterByName(name: string): Promise<Character | null> {
        return this.prismaService.character.findUnique({
            where: {
                name
            }
        })
    }
    

}