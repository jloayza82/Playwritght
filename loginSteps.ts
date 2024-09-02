import {Given, Then, When} from '@cucumber/cucumber'
import {chromium , Page , Browser} from "@playwright/test";

let browser : Browser;
let page: Page;

/*Given('Usuario ingresa usuario as string{}', async function(Username) {
   browser = await chromium.launch({headless : false});
   page = await browser.newPage();
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.locator('input[placeholder ="Username"]').fill('Admin')

}),*/

/*Given('Usuario ingresa password as {string}', async function (Password) {
    
    await page.locator('input[placeholder ="Password"]').fill('admin123')

})*/

Given('Usuario ingresa usuario', async function () {
  // Write code here that turns the phrase above into concrete actions
  browser = await chromium.launch({headless : false});
  page = await browser.newPage();
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.locator('input[placeholder ="Username"]').fill('Admin')
})


When('Usuario ingresa password', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator('input[placeholder ="Password"]').fill('admin123')
})

Then ('Usuario presiona botón ingresar', async function () {
    await page.keyboard.press('Enter');
})






