import { Before, After, ITestCaseHookParameter, Status, AfterStep } from '@cucumber/cucumber';
import { Browser, chromium, Page } from 'playwright';
import { LoginPage } from './../src/pages/LoginPage'; // Verify this path or update it to the correct one
import fs from 'fs';
import path from 'path';

let browser: Browser;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        viewport: { width: 1280, height: 720 },
    });
    const page = await context.newPage();
    await page.goto('about:blank');

    await page.evaluate(() => {
        window.moveTo(0, 0);
        window.resizeTo(screen.availWidth, screen.availHeight);
    });

    this.page = page;
    this.loginPage = new LoginPage(page);
});

AfterStep(async function ({ pickle, result }) {

    if (!this.page) return;

    const scenarioName = pickle.name.replace(/\s+/g, '_');
    const step = pickle.steps[this.stepIndex];
    const stepName = step?.text.replace(/\s+/g, '_') || `step-${this.stepIndex + 1}`;
    const timestamp = Date.now();

    const dir = path.join('reports', 'screenshots');
    fs.mkdirSync(dir, { recursive: true });

    const screenshotPath = path.join(dir, `${this.stepIndex + 1}-${stepName}-${timestamp}.png`);
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    this.attach(fs.readFileSync(screenshotPath), 'image/png');

    this.stepIndex += 1;

});

After(async function () {
    if (browser) {
        if (browser) await browser.close();
    }
});