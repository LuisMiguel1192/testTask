import { test as base } from "@playwright/test";

import Db from "../pages/dbPage";

type DbFixtures = {
    Db: Db;
};

export const test = base.extend<DbFixtures>({
    Db: async ({ }, use) => {
        const db = new Db();

        await db.prismaConnect();

        await use(db);
    },
});

export { expect } from "@playwright/test";