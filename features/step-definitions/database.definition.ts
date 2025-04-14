import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { createAppUser, appUserExists, deleteAppUser } from '../../src/tests/db.spec';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

Given('I add an app user {string}', async function (username: string) {
    const existingUser = await prisma.appUser.findUnique({
        where: { username }
    });

    if (existingUser) {
        console.log(`⚠️ User "${username}" already exists in the database. Skipping creation.`);
    } else {
        await prisma.appUser.create({
            data: {
                id: BigInt(Date.now()),
                username,
                firstname: 'Luis',
                lastname: 'Figueroa',
                password: '12345678',
                email: `${username}@mail.com`,
                enabled: true,
                nonlocked: true,
                last_time_password_updated: new Date('1970-01-01T00:00:00.000Z'),
                password_never_expires: false,
                cannot_change_password: false
            }
        });

        console.log(`✅ User "${username}" created successfully.`);
    }
});

Then('the app user {string} should exist in the database', async function (username: string) {
    const user = await prisma.appUser.findUnique({
        where: { username }
    });
    expect(user).not.toBeNull();
});

Then('the app user {string} should not exist in the database', async function (username: string) {
    const exists = await appUserExists(username);
    expect(exists).toBe(false);
});

Given('I delete the app user {string}', async function (username: string) {
    await deleteAppUser(username);
});