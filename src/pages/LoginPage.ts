import { expect, Page } from "@playwright/test";
import { BASE_URL } from '../tests/login.spec';

export class LoginPage {

  constructor(private page: Page) {
  }

  async goto(page: string) {
    await this.page.goto(`${BASE_URL}/${page}`);
  }

  async sendKeysInputByName(input: string, text: string) {
    const xpath = `//input[@name="${input}"]`;
    await this.page.locator(xpath).scrollIntoViewIfNeeded();
    await this.page.locator(xpath).fill(text);
  }

  async clickButtonByText(text: string) {
    const xpath = `//button[contains(text(),"${text}")]`;
    await this.page.locator(xpath).scrollIntoViewIfNeeded();
    await this.page.locator(xpath).click();
  }

  async assertTextIsCorrect(expectedText: string) {
    const xpath = `//div//b[contains(text(),'${expectedText}')]`;
    await this.page.locator(xpath).scrollIntoViewIfNeeded();
    await expect(this.page.locator(xpath)).toBeVisible();
  }

  async checkColorButton(button: string, expectedColor: string) {
    const xpath = `//button[contains(text(),"${button}")]`;
    const locator = this.page.locator(xpath);
    await this.page.locator(xpath).scrollIntoViewIfNeeded();
    const bgColor = await locator.evaluate(el => {
      return window.getComputedStyle(el).backgroundColor;
    });
    expect(bgColor).toBe(expectedColor);
  }
}
