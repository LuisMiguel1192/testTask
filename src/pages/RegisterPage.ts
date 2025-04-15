import { expect, Locator, Page } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();
export default class RegisterPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    public async goto() {
        const baseUrl = process.env.BASE_URL;
        await this.page.goto(`${baseUrl}/register`);
    }
}