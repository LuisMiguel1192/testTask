import { expect, Locator, Page } from "@playwright/test";

export default class CommonsPage {

  readonly page: Page;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerButton = page.locator('button[type="submit"]');
  }

  public async clickRegisterButton(){
    await this.registerButton.click();
  }

  public async fillInput(input: string, text: string) {
    const locator = this.page.locator(`input[name="${input}"]`);
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }

  public async assertTextIsCorrect(text: string) {
    const locator = this.page.locator(`//b[contains(text(),"${text}")]`);
    await locator.waitFor({ state: 'visible' });
    await expect(locator).toBeVisible();
  }

  public async assertColorButtonIsCorrect(color: string) {
    await this.registerButton.waitFor({ state: 'visible' });
    await expect(this.registerButton).toHaveCSS('background-color', color);
  }
}
