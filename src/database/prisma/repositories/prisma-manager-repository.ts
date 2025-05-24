import { Prisma, Manager, ManagerPermission, ManagerOf } from "@prisma/client";
import { ManagerRepository } from "src/manager/application/repositories/manager-repository";
import { PrismaService } from "../prisma.service";

export class PrismaManagerRepository implements ManagerRepository {

    constructor(private prismaService: PrismaService) {}

    async create(data: Prisma.ManagerCreateInput, managerOf: string[]): Promise<any> {

        const manager = await this.prismaService.manager.create({
            data
        })

        for (const item of managerOf) {
            await this.createManagerPermission(item, manager.id)
        }
    }

    async login(name: string, password: string): Promise<Manager | null> {
        return this.prismaService.manager.findFirst({
            where: {
                name,
                password
            }
        })
    }

    async findByName(name: string): Promise<Manager | null> {
        return this.prismaService.manager.findUnique({
            where: {
                name
            }
        })
    }

    async createManagerPermission(managerOf: string, managerId: string): Promise<ManagerPermission> {
        
        return this.prismaService.managerPermission.create({
            data: {
                managerOf: ManagerOf[managerOf],
                managerId: managerId,
            }
        })
       
    }
}