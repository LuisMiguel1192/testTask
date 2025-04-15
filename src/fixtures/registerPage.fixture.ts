import { test as base } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import CommonsPage from "../pages/CommonsPage";

type RegisterPageFixtures = {
    RegisterPage: RegisterPage;
    CommonsPage: CommonsPage;
};

export const test = base.extend<RegisterPageFixtures>({
    RegisterPage: async ({ page }, use) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await use(registerPage);
    },
    CommonsPage: async ({ page }, use) => {
        const commonsPage = new CommonsPage(page);
        await use(commonsPage);
    },
})

export { expect } from "@playwright/test";