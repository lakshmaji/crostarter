import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
  // TODO: move this to global setup or helper
  // Runs before each test and signs in each page.
  await page.goto('/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByPlaceholder('user name').click();
  await page.getByPlaceholder('user name').fill('demo@account.com');
  await page.getByPlaceholder('user name').press('Tab');
  await page.getByPlaceholder('Password').fill('secret');
  await page.getByRole('button', { name: 'Log In' }).click();
  // ensure user was logged -in
  const notification = await page.getByTestId('header-message');
  await expect(notification).toHaveText('signed in');
});

test('create project successfully', async ({ page }) => {
  interface IReward {
    title: string;
    description: string;
    amount: string;
  }
  interface ProjectFormData {
    title: string;
    website: string;
    description: string;
    end_date: string;
    funding_goal: string;
    details: string;
    category_id: string;
    tagline: string;
    rewards: IReward[];
  }
  const funding_goal = faker.commerce.price(1000, 12000);
  const defaultValues: ProjectFormData = {
    title: faker.commerce.productName(),
    website: faker.internet.domainName(),
    description: faker.commerce.productDescription(),
    end_date: '',
    funding_goal,
    details: faker.lorem.paragraphs(3),
    category_id: '',
    tagline: faker.company.catchPhrase(),
    rewards: Array.from({
      length: Math.floor(
        faker.datatype.number({
          min: 0,
          max: 5,
        }),
      ),
    }).map(() => {
      return {
        title: faker.vehicle.vehicle(),
        description: faker.lorem.sentence(5),
        amount: faker.commerce.price(10, (Number(funding_goal) * 10) / 100),
      };
    }),
  };

  await page.getByRole('link', { name: 'Create a new project to raise funds' }).click();

  await expect(page).toHaveURL(/projects\/new/);

  await page.getByLabel('Upload Picture').click();
  await page.getByLabel('Upload Picture').setInputFiles('./e2e/fixtures/angry.png');
  await page.getByPlaceholder('Project title').click();
  await page.getByPlaceholder('Project title').fill(defaultValues.title);
  await page.getByPlaceholder('Project title').press('Tab');
  await page.getByPlaceholder('tag line').fill(defaultValues.tagline);
  await page.getByPlaceholder('tag line').press('Tab');
  await page.getByPlaceholder('Eg. https://www.website.com').fill(defaultValues.website);
  await page.getByPlaceholder('Eg. https://www.website.com').press('Tab');
  await page.getByPlaceholder('Eg. 800,000').click();
  await page.getByPlaceholder('Eg. 800,000').fill(defaultValues.funding_goal);
  await page
    .getByText('New ProjectUpload PictureProject TitleWebsiteFunding GoalEnd DateCategorySelect.')
    .click();
  await page.getByPlaceholder('Select end date').click();
  await page.getByRole('gridcell', { name: 'Tuesday, 31 January 2023' }).click();
  await page.locator('#react-select-3-input').click();
  await page.locator('#react-select-3-option-2').click();
  await page.getByPlaceholder('Please enter your comments...').fill(defaultValues.description);

  let counter = 0;

  for (const reward of defaultValues.rewards) {
    await page.getByRole('button', { name: 'Add Reward' }).click();
    const listitem = await page.locator(
      `internal:role=listitem >> internal:has-text="Delete"i >> nth=${counter}`,
    );
    await listitem.getByPlaceholder('reward title').click();
    await listitem.getByPlaceholder('reward title').fill(reward.title);
    await listitem.getByPlaceholder('description').click();
    await listitem.getByPlaceholder('description').fill(reward.description);
    await listitem.getByPlaceholder('reward amount').click();
    await listitem.getByPlaceholder('reward amount').fill(reward.amount);

    counter++;
  }

  await page.getByRole('button', { name: 'Create' }).click();
  const errorBar = await page.getByRole('alert');
  expect(errorBar).toHaveText('');
  await expect(page).toHaveURL('/projects/new');
  const notification = await page.getByTestId('header-message');
  await expect(notification).toHaveText(`Project ${defaultValues.title} created!`);
});
