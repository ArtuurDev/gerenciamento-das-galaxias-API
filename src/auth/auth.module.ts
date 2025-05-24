import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Env } from "src/config/env-schema";
import { AuthGuard } from "./auth-guard";

@Module({
    imports: [JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService<Env>) => {
            const secret = config.get('JWT_SECRET')
            return {
                secret
            }
        }
    })], 
    providers: [AuthGuard],
    exports: [JwtModule]
})
export class AuthModule {}