import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './config/env-schema';
import { CharacterModule } from './character/personagem.module';

@Module({
  imports: [ConfigModule.forRoot({
    validate: env => envSchema.parse(env)
    }), CharacterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
