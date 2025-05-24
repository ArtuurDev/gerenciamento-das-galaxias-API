import { Character, Prisma } from "@prisma/client";

export abstract class CharacterRepository {
    abstract create(data: Prisma.CharacterCreateInput): Promise<Character>
    abstract getCharacterById(id: string): Promise<Character | null>
    abstract updateCharacterById(data: Partial<Character>, id: string): Promise<Character>
    abstract getCharacterByName(name: string): Promise<Character | null>
    abstract deleteCharacterById(id: string): Promise<any>
}