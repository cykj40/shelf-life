import { expect, test } from '@playwright/test';

test('reader can sign in and land on their shelf signed in as ice cream ass', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('fartay@femail.com');
    await page.getByLabel('Password').fill('Farting21');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('/shelf');
});
