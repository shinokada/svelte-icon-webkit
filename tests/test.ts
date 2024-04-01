import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Icon Webkit' })).toBeVisible();
});

test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/svelte-4/getting-started');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: v1' })).toBeVisible();
});

test('three-tabs page has expected h1', async ({ page }) => {
  await page.goto('/three-tabs');
  await expect(page.getByRole('heading', { name: 'Solid Icons' })).toBeVisible();
});

test('three-tabs-sizebytailwind page has expected h1', async ({ page }) => {
  await page.goto('/three-tabs-sizebytailwind');
  await expect(page.getByRole('heading', { name: 'Outline Icons' })).toBeVisible();
});

test('no-tabs page has expected h1', async ({ page }) => {
  await page.goto('/no-tabs');
  await expect(page.getByRole('heading', { name: 'Super Tiny Icons' })).toBeVisible();
});
