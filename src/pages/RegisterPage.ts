import { expect, Locator, Page } from "@playwright/test";
import { BASE_URL } from '../tests/login.spec';


export default class RegisterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto(`${BASE_URL}/register`);
    }
}