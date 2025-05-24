import { NameAlreadyExists } from "src/error/name-already-exists"
import { ManagerRepository } from "../repositories/manager-repository"

export interface CreateManagerUseCaseRequest {
    name: string
    password: string
    managerOf: string[]
}

export class CreateManagerUseCase {
    
    constructor(private managerRepository: ManagerRepository) {}

    async execute({
        name,
        password,
        managerOf
    }: CreateManagerUseCaseRequest) {

        const nameAlreadyExists = await this.managerRepository.findByName(name)
        if(nameAlreadyExists) return new NameAlreadyExists()
 
        const manager = await this.managerRepository.create({
            name,
            password
        }, managerOf)

        return {
            manager
        }

    }

}