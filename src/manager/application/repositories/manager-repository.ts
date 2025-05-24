import { Manager, ManagerPermission, Prisma } from "@prisma/client";

export abstract class ManagerRepository {
    abstract create(data: Prisma.ManagerCreateInput, managerOf: string[]): Promise<any>
    abstract login(name: string, password: string): Promise<Manager | null>
    abstract findByName(name: string): Promise<Manager | null>
    abstract createManagerPermission(managerOf: string, managerId: string): Promise<ManagerPermission>
} 