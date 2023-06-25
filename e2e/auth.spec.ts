import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test('signup', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'New? Create account' }).click();
  await page.getByPlaceholder('user name').click();
  await page.getByPlaceholder('user name').fill('demo@account.com');
  await page.getByPlaceholder('user name').press('Tab');
  await page.getByPlaceholder('Password').fill('secret');
  await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('login', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByPlaceholder('user name').click();
  await page.getByPlaceholder('user name').fill('demo@account.com');
  await page.getByPlaceholder('user name').press('Tab');
  await page.getByPlaceholder('Password').fill('secret');
  await page.getByRole('button', { name: 'Log In' }).click();

  const username = await page.getByTestId('username');
  await expect(username).toHaveText('demo@account.com');
});
