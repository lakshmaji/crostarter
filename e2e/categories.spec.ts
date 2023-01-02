import { test, expect } from '@playwright/test';

test.describe('categories', () => {
  test('navigate to categories page', async ({ page }) => {
    await page.goto('/');
    const categories = page.getByRole('link', { name: 'View Categories' });

    await expect(categories).toHaveAttribute('href', '/categories');
  });

  test('should display all categories', async ({ page }) => {
    await page.goto('/categories');
    await expect(page.locator('#categories div')).toHaveCount(38);
  });
});
