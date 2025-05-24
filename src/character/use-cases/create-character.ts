import { Injectable } from "@nestjs/common";
import { Affiliation } from "@prisma/client";
import { CharacterRepository } from "../repositories/character-repository";
import { NameAlreadyExists } from "src/error/name-already-exists";

export interface CreatePersonagemUseCaseRequest {
    name: string
    species: string
    homePlanet: string
    affiliation: string
}



@Injectable()
export class CreateCharacterUseCase {

    constructor(
        private characterRepository: CharacterRepository
    ) {}

    async execute({
        affiliation,
        homePlanet,
        name,
        species
    }: CreatePersonagemUseCaseRequest): Promise<NameAlreadyExists | {}> {

        const characterAlreadyExists = await this.characterRepository.getCharacterByName(name)
        if(characterAlreadyExists) {
            return new NameAlreadyExists()
        }

        const character = await this.characterRepository.create({
            affiliation: Affiliation[affiliation],
            homePlanet,
            name,
            species
        })

        return {}
    }
}