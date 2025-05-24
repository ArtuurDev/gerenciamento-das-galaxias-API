import { BadRequestException, Body, Controller, InternalServerErrorException, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Affiliation } from "@prisma/client";
import { Request, Response } from "express";
import { createZodDto, ZodValidationPipe } from "nestjs-zod";
import { z } from "zod";
import { CreateCharacterUseCase } from "../use-cases/create-character";
import { AuthGuard } from "src/auth/auth-guard";
import { Roles } from "src/auth/roles";
import { NameAlreadyExists } from "src/error/name-already-exists";

const requestSchema = z.object({
    name: z.string(),
    species: z.string(),
    homePlanet: z.string(),
    affiliation: z.enum([Affiliation.JEDI, Affiliation.REBEL, Affiliation.SITH])

})

export class CreateCharacterDTO extends createZodDto(requestSchema) {}

@Controller() 
export class CreateCharacterController {

    constructor(
        private createCharacterUseCase: CreateCharacterUseCase
    ) {}

    @Post('characters')
    @UseGuards(AuthGuard)
    @Roles(['CHARACTER'])
    async handle(
        @Req() req: Request,
        @Res() res: Response,
        @Body(new ZodValidationPipe(requestSchema)) body: CreateCharacterDTO) {
        
            const {affiliation, homePlanet, name, species} = body

            try {
                const result = await this.createCharacterUseCase.execute({
                    affiliation,
                    homePlanet,
                    name,
                    species
                })

                if(result instanceof NameAlreadyExists) {
                    return res.status(result.code).json(result.toJson())
                }

                return res.status(201).json({
                    message: 'success',
                })

            } catch(error) {
                throw new InternalServerErrorException(error)
            }
    }
}