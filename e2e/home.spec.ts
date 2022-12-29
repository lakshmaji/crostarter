import { test, expect } from '@playwright/test';

test('homepage has title and links to get started page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CroStarter/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/sessions/new');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain `new` in url.
  await expect(page).toHaveURL(/.*new/);
});
