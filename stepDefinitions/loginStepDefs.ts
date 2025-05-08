import { Given, When, Then } from '../features/steps/fixtures';


import { LoginPage } from '../pages/loginPage';
import { getEnv } from '../support/env/env';
import { expect } from '@playwright/test';

let loginPage: LoginPage;

Given('I am on the login page', async ({page}) => {
    
    getEnv();
    loginPage = new LoginPage(page);
    await loginPage.naviagateToLoginPage();
  });
  
  When('I enter valid username and password {string} and {string}', async ({}, username, password) => {
    await loginPage.loginWithValidCredentials(username, password);
  });
  
  When('I click on the login button', async ({}) => {
    
    console.log("Clicking on the login button");
  });
  
  Then('I verify that logged in successfully', async ({}) => {
    
    console.log("Verifying that logged in successfully");
  });
  