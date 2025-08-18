import { test, expect } from '@playwright/test';

test('open playwright site', async ({ page }) => 
    {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);

          await page.waitForTimeout(2000)
        console.log(page.title())
      
});
