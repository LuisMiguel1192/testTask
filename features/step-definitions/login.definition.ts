import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

Given('I navigate to the {string} page', { timeout: 10000 }, async function (page: string) {
  await this.loginPage.goto(page);
});

Given('I register with username {string} and password {string}', async function (user: string, pass: string) {
  await this.loginPage.sendKeysInputByName('username', user);
  await this.loginPage.sendKeysInputByName('password', pass);
  await this.loginPage.sendKeysInputByName('confirmPassword', pass);
});

Given('I login with username {string} and password {string}', async function (user: string, pass: string) {
  await this.loginPage.sendKeysInputByName('username', user);
  await this.loginPage.sendKeysInputByName('password', pass);
});

Given('I click the {string} button', async function (button: string) {
  await this.loginPage.clickButtonByText(button);
});

Then('I should see the text {string}', async function (text: string) {
  await this.loginPage.assertTextIsCorrect(text);
});

Then('I should see the color of the {string} button is {string}', async function (text: string, color: string) {
  await this.loginPage.checkColorButton(text, color);
});