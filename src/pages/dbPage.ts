import { PrismaClient } from "@prisma/client";
import { randomInt } from "crypto";

export default class Db {
    public prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async prismaConnect() {
        await this.prisma.$connect();
    }

    private generateId(): bigint {
        return BigInt(Date.now() + randomInt(1000));
    }

    async createUser(data: {
        username: string;
        firstname: string;
        lastname: string;
        password: string;
        email: string;
        roleName: string;
    }) {
        let role = await this.prisma.role.findUnique({
            where: { name: data.roleName },
        });

        if (!role) {
            const roleId = this.generateId();
            role = await this.prisma.role.create({
                data: {
                    id: roleId,
                    name: data.roleName,
                    description: `${data.roleName} role`,
                },
            });
        }

        const userId = this.generateId();
        const user = await this.prisma.appUser.create({
            data: {
                id: userId,
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname,
                password: data.password,
                email: data.email,
                nonlocked: true,
                enabled: true,
                last_time_password_updated: new Date(),
                password_never_expires: false,
                cannot_change_password: false,
                is_deleted: false,
                roles: {
                    create: {
                        role_id: role.id,
                    },
                },
            },
        });

        return user;
    }

    async findUser(username: string) {
        return this.prisma.appUser.findUnique({
            where: { username },
            include: { roles: true },
        });
    }

    async deleteUserByUsername(username: string) {
        const user = await this.prisma.appUser.findUnique({
            where: { username },
            include: { roles: true },
        });

        if (!user) return;

        await this.prisma.appUserRole.deleteMany({
            where: { appuser_id: user.id },
        });

        await this.prisma.appUser.delete({
            where: { username },
        });
    }
}