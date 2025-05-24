import { BadRequestException, CanActivate, ExecutionContext, Injectable, Res, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Roles } from "./roles";
import { Response } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector
     ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        const request = context.switchToHttp().getRequest()
        const response: Response = context.switchToHttp().getResponse()
        const authorization = request.headers.authorization

        const roles = this.reflector.get(Roles, context.getHandler())
        if(!roles) {
            return true
        }

        if(!authorization) {
            throw new BadRequestException({
                error: 'Não Autorizado',
                message: 'Token não informado'
            })
        }

        const [Bearer, token] = authorization.split(' ')
        if(Bearer !== 'Bearer' || !token ) {
            throw new BadRequestException({
                error: 'Não Autorizado',
                message: 'Token mal formatado'
            })
        }

        try {
            const payload = this.jwtService.verify(token)
            if(!roles.includes(payload.permission)) {
                response.status(401).json({
                error: 'Não Autorizado',
                message: 'usuário não possui as permissões necessarias'
            })
        }
            request.user = payload
            return true
        
        } catch(error) {
            throw new UnauthorizedException({
                error: 'Não Autorizado',
                message: 'Token inválido ou expirado'
            })
        }

    }

}