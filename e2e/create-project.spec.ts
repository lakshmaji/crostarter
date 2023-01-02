import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByPlaceholder('user name').click();
  await page.getByPlaceholder('user name').fill('demo@account.com');
  await page.getByPlaceholder('user name').press('Tab');
  await page.getByPlaceholder('Password').fill('secret');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Create a new project to raise funds' }).click();
  await page.getByLabel('Upload Picture').click();
  await page.getByLabel('Upload Picture').setInputFiles('./e2e/fixtures/angry.png');
  await page.getByPlaceholder('Project title').click();
  await page.getByPlaceholder('Project title').fill('A new movie');
  await page.getByPlaceholder('Project title').press('Tab');
  await page.getByPlaceholder('tag line').fill('from minions director');
  await page.getByPlaceholder('tag line').press('Tab');
  await page.getByPlaceholder('Eg. https://www.website.com').fill('illumination.com');
  await page.getByPlaceholder('Eg. https://www.website.com').press('Tab');
  await page.getByPlaceholder('Eg. 800,000').click();
  await page.getByPlaceholder('Eg. 800,000').fill('2305');
  await page
    .getByText('New ProjectUpload PictureProject TitleWebsiteFunding GoalEnd DateCategorySelect.')
    .click();
  await page.getByPlaceholder('Select end date').click();
  await page.getByRole('gridcell', { name: 'Tuesday, 31 January 2023' }).click();
  await page.locator('#react-select-3-input').click();
  await page.locator('#react-select-3-option-2').click();
  await page
    .getByPlaceholder('Please enter your comments...')
    .fill('Some description about new movie');
  await page.getByRole('button', { name: 'Add Reward' }).click();
  await page.getByPlaceholder('reward title').fill('perk 1');
  await page.getByPlaceholder('description').click();
  await page.getByPlaceholder('description').fill('giving back');
  await page.getByPlaceholder('reward amount').click();
  await page.getByPlaceholder('reward amount').fill('2');
  await page.getByRole('button', { name: 'Add Reward' }).click();
  await page.locator('input[name="rewards_attributes\\.1\\.title"]').click();
  await page.locator('input[name="rewards_attributes\\.1\\.title"]').fill('perk 2');
  await page.locator('input[name="rewards_attributes\\.1\\.description"]').click();
  await page
    .locator('input[name="rewards_attributes\\.1\\.description"]')
    .fill('giving back another');
  await page.locator('input[name="rewards_attributes\\.1\\.amount"]').click();
  await page.locator('input[name="rewards_attributes\\.1\\.amount"]').fill('3');
  await page.getByRole('button', { name: 'Create' }).click();
});
