import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './config/env-schema';

@Module({
  imports: [ConfigModule.forRoot({
    validate: env => envSchema.parse(env)
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
