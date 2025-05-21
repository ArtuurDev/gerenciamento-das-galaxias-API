import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { Env } from "src/config/env-schema";

@Module({
    imports: [JwtModule.registerAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService<Env>) => {
            const secret = config.get('JWT_SECRET')
            return {
                secret
            }
        }
    })]
})
export class AuthModule {}