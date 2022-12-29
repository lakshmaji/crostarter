import { test, expect } from '@playwright/test';

test.describe('header', () => {
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

  test('homepage has categories link', async ({ page }) => {
    await page.goto('/');
    const categories = page.getByRole('link', { name: 'View Categories' });

    await expect(categories).toHaveAttribute('href', '/categories');
  });

  test('homepage has start project link', async ({ page }) => {
    await page.goto('/');
    const project = page.getByRole('link', { name: 'Create a new project to raise funds' });

    await expect(project).toHaveAttribute('href', '/projects/new');
  });

  test('homepage has external github link', async ({ page }) => {
    await page.goto('/');
    const github = page.getByRole('link', { name: "View Lakshmaji's github profile" });

    // Expect an attribute "to be strictly equal" to the value.
    await expect(github).toHaveAttribute('href', 'https://github.com/lakshmaji');

    // Click the get started link.
    await github.click();
    await expect(page).toHaveURL(/https:\/\/github.com\/lakshmaji/);
  });

  test('homepage has external linkedin link', async ({ page }) => {
    await page.goto('/');
    const github = page.getByRole('link', { name: "View Lakshmaji's Linkedin profile" });

    // Expect an attribute "to be strictly equal" to the value.
    await expect(github).toHaveAttribute('href', 'https://in.linkedin.com/in/lakshmajee');

    // Click the get started link.
    await github.click();
    await expect(page).toHaveURL(/linkedin.*/);
  });
});
