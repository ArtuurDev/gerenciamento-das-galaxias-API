import { NameAlreadyExists } from "src/error/name-already-exists"
import { ManagerRepository } from "../repositories/manager-repository"
import { LoginFailed } from "src/error/login-failed"
import { Manager } from "@prisma/client"

export interface LoginManagerUseCaseRequest {
    name: string
    password: string
}

export class CreateManagerUseCase {
    
    constructor(private managerRepository: ManagerRepository) {}

    async execute({
        name,
        password,

    }: LoginManagerUseCaseRequest): Promise<LoginFailed | NameAlreadyExists | Manager> {

        const nameAlreadyExists = await this.managerRepository.findByName(name)
        if(nameAlreadyExists) return new NameAlreadyExists()
 
        const manager = await this.managerRepository.login(
            name,
            password
        )

        if(!manager) {
            return new LoginFailed()
        }

        return manager

    }

}