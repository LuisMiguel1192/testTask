import { test as base } from "@playwright/test";
import CommonsPage from "../pages/CommonsPage";
import LoginPage from "../pages/LoginPage";

type LoginFixtures = {
  LoginPage: LoginPage;
  CommonsPage: CommonsPage;
};

export const test = base.extend<LoginFixtures>({
  LoginPage: async ({ page }, use) => {
    const registerPage = new LoginPage(page);
    await registerPage.goto();
    await use(registerPage);
  },
  CommonsPage: async ({ page }, use) => {
    const commonsPage = new CommonsPage(page);
    await use(commonsPage);
  },
});

export { expect } from "@playwright/test";
