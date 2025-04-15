import { test, expect } from "../fixtures/registerPage.fixture";

test("@Register", async ({ RegisterPage, CommonsPage }) => {
    await CommonsPage.fillInput("username", "testTask10");
    await CommonsPage.fillInput("password", "12345678");
    await CommonsPage.fillInput("confirmPassword", "12345678");
    await CommonsPage.clickRegisterButton();
    await CommonsPage.assertTextIsCorrect("Successfully registered, you can log in now.");
  });