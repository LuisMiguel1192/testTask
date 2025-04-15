import { test, expect } from "../fixtures/loginPage.fixture";


export const BASE_URL = process.env.BASE_URL || (() => {
  console.warn("BASE_URL no está definida en el .env");
  return 'http://localhost:3000';
})();

test("@loginSuccess", async ({ LoginPage, CommonsPage }) => {
  await CommonsPage.fillInput("username", "testTask9");
  await CommonsPage.fillInput("password", "12345678");
  await CommonsPage.clickRegisterButton();
  await CommonsPage.assertTextIsCorrect("You logged into a secure area!");
});

test("@FailureShortPassword", async ({ LoginPage, CommonsPage }) => {
  await CommonsPage.fillInput("username", "testTask9");
  await CommonsPage.fillInput("password", "12");
  await CommonsPage.clickRegisterButton();
  await CommonsPage.assertTextIsCorrect("Your password is invalid!");
});

test("@FailureUserEmpty", async ({ LoginPage, CommonsPage }) => {
  await CommonsPage.fillInput("username", "");
  await CommonsPage.fillInput("password", "12345678");
  await CommonsPage.clickRegisterButton();
  await CommonsPage.assertTextIsCorrect("Your username is invalid!");
});

test("@FailurePasswordEmpty", async ({ LoginPage, CommonsPage }) => {
  await CommonsPage.fillInput("username", "testTask9");
  await CommonsPage.fillInput("password", "");
  await CommonsPage.clickRegisterButton();
  await CommonsPage.assertTextIsCorrect("Your password is invalid!");
});

test("@loginColorButton", async ({ LoginPage, CommonsPage }) => {
  await CommonsPage.fillInput("username", "testTask9");
  await CommonsPage.fillInput("password", "12345678");
  await CommonsPage.assertColorButtonIsCorrect("rgb(13, 110, 253)");
});

