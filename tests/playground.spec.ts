import { expect, test } from '@playwright/test';


//Locate the "add to shelf" button

test('add to shelf button is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByRole('button', { name: 'Add to shelf' })).toBeVisible();
});

// Locate the "Cancel" button

test('cancel button is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
});

// Locate the disabled "Out of Stock" button and assert that it is disabled

test('out of stock button is disabled', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByRole('button', { name: 'Out of Stock' })).toBeDisabled();



});

// Locate the search input by its label

test('search input is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByLabel('Search')).toBeVisible();

});



// locate the first delete button out of 2 buttons with the same role

test('first delete button is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByRole('button', { name: 'Delete' }).nth(0)).toBeVisible();
});


// locate the remove button inside the third item in the "Reading List" chain find the list, find the items, narrow to the third, then find the button inside it    

test('remove button is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByRole('button', { name: 'Remove' }).nth(2)).toBeVisible();
});

// inside the article labeled "Piranesi by Susanna Clarke," locate the "Rate this book" button

test('rate this book button is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByRole('button', { name: 'Rate this book' }).nth(0)).toBeVisible();
});

// Locate the "Author" input and assert that its hint text ("Last Name, First Name") is visible

test('author input hint text is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByLabel('Author')).toBeVisible();
    await expect(page.getByText('Last name, first name')).toBeVisible();
});

// find the paragraph that mentions "42 days"

test('42 days paragraph is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByText('42 days')).toBeVisible();
});

test('find the text "3 of 12 books finished", and assert that it is visible', async ({ page }) => {
    await page.goto('/playground')
    await expect(page.getByText('3 of 12 books finished')).toBeVisible();
});



