import { test as base, expect } from "@playwright/test";
import CommonsPage from "../pages/CommonsPage";

type CommonsFixtures = {
    CommonsPage: CommonsPage;
};

export const registerPage = base.extend<CommonsFixtures>({
    CommonsPage: async ({ page }, use) => {
        const commonsPage = new CommonsPage(page);
        await use(commonsPage);
    },
})