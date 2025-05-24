import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { CreateCharacterController } from "./controllers/create-character";
import { CreateCharacterUseCase } from "./use-cases/create-character";
import { CharacterRepository } from "./repositories/character-repository";
import { PrismaCharacterRepository } from "src/database/prisma/repositories/prisma-personagem-repository";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [CreateCharacterController],
    providers: [
        CreateCharacterUseCase, 
        {
        provide: CharacterRepository,
        useClass: PrismaCharacterRepository
        },
    ]
})
export class CharacterModule {}