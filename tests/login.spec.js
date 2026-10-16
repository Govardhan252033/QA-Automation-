
/* const { test, expect } = require('@playwright/test');

test('TC_01: Valid username and password', async ({ page }) => {

    // Step 1: Open the login page
    await page.goto('https://the-internet.herokuapp.com/login');

    // Step 2: Enter username
    await page.locator('#username').fill('tomsmith');

    // Step 3: Enter password
    await page.locator('#password').fill('SuperSecretPassword!');

    // Step 4: Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Step 5: Verify successful login
    await expect(page.locator('#flash'))
        .toContainText('You logged into a secure area!');

});



const { test1, expect1 } = require('@playwright/test');

// TC_02: Invalid username

test('TC_02: Invalid username', async ({ page }) => {

    // Step 1: Open login website
    await page.goto('https://the-internet.herokuapp.com/login');

    // Step 2: Enter invalid username
    await page.locator('#username').fill('wronguser');

    // Step 3: Enter correct password
    await page.locator('#password').fill('SuperSecretPassword!');

    // Step 4: Click Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Step 5: Verify error message
    await expect(page.locator('#flash'))
        .toContainText('Your username is invalid!');

});

// TC_03: Invalid password

test('TC_03: Invalid password', async ({ page }) => {

    // Step 1: Open login website
    await page.goto('https://the-internet.herokuapp.com/login');

    // Step 2: Enter correct username
    await page.locator('#username').fill('tomsmith');

    // Step 3: Enter invalid password
    await page.locator('#password').fill('wrongpassword');

    // Step 4: Click Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Step 5: Verify error message
    await expect(page.locator('#flash'))
        .toContainText('Your password is invalid!');

});
*/




const { test, expect } = require('@playwright/test');

// Reusable login function

async function login(page, username, password) {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').fill(username);

    await page.locator('#password').fill(password);

    await page.getByRole('button', { name: 'Login' }).click();

}


// TC_01: Valid username and password

test('TC_01: Valid login', async ({ page }) => {

    await login(page, 'tomsmith', 'SuperSecretPassword!');

    await expect(page.locator('#flash'))
        .toContainText('You logged into a secure area!');

});


// TC_02: Invalid username

test('TC_02: Invalid username', async ({ page }) => {

    await login(page, 'wronguser', 'SuperSecretPassword!');

    await expect(page.locator('#flash'))
        .toContainText('Your username is invalid!');

});


// TC_03: Invalid password

test('TC_03: Invalid password', async ({ page }) => {

    await login(page, 'tomsmith', 'wrongpassword');

    await expect(page.locator('#flash'))
        .toContainText('Your password is invalid!');

});
