import {Given, Then, When} from '@cucumber/cucumber'
import {chromium , Page , Browser} from "@playwright/test";

let browser : Browser;
let page: Page;

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


  
When('Usuario ingresa a opción Admin', async function() {
    
    await page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()
 
  })



When('Usuario ingresa a opción Add',  async function() {
  
    await page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button').click()
})



When('Usuario ingresa campos para crear empleado', async function() {

//user role
await page.getByText('ESS').click()

//status
await page.locator('xpath= //*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[1]').click();

//nombre del empleado
await page.locator('xpath= //*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input').fill('FName LName')

//username
await page.locator('xpath= //*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input').fill('lmartinez123')

//password
await page.locator('xpath= //*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input').fill('Admin123456')

//confirmr password
await page.locator('xpath= //*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input').fill('Admin123456')

})


  
Then('Usuario crea empleado satisfactoriamente', async function() {
    await page.locator('xpath= //*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]').click()
})