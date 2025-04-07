import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createAppUser(data: {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  enabled?: boolean;
  nonlocked?: boolean;
}) {
  return await prisma.appUser.create({
    data: {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
      email: data.email,
      enabled: data.enabled ?? true,
      nonlocked: data.nonlocked ?? true,
    }
  });
}

export async function appUserExists(username: string): Promise<boolean> {
  const user = await prisma.appUser.findUnique({ where: { username } });
  return !!user;
}

export async function deleteAppUser(username: string) {
  await prisma.appUser.deleteMany({ where: { username } });
}
