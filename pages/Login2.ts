// import { expect, Page } from "@playwright/test";
// import PlaywrightWrappers from "../../../support/wrapper/PlaywrightWrappers";
//  
// import testData = require("../helper/util/test-data/testDataNewUser.json");
//  
// const fname = testData.firstName;
// const lname = testData.lastName;
// const email = testData.email;
// const phone = testData.phone;
// const street = testData.street;
// const city = testData.city;
// const postcode = testData.postCode;
// const jobTitle = testData.jobTitle;
//  
// export default class UsersPage {
//  
//     private base: PlaywrightWrappers;
//  
//     constructor(private page: Page) {
//         this.base = new PlaywrightWrappers(page);
//     }
//  
//     // Locators of Page Elements
//     // To interact these elements, use ByLocator methods like waitAndClickByLocator(locator)
//     private Elements = {

//         usernameInput: "#user-name",
//         passwordInput: "#password",
//         usernameInputLocator : this.page.locator('[data-test="username"]'),

//         newUser: this.page.getByRole('link', { name: 'New User' }),
//         deleteUser: this.page.getByRole('button', { name: 'Delete' }),
//         edit: this.page.getByRole('row', { name: `Row Unselected QT ${fname}` }).getByLabel('Edit'),
//         // personal details
//         firstName: this.page.locator('input[name="first_name"]'),
//         lastName: this.page.locator('input[name="last_name"]'),
//         email: this.page.getByRole('textbox', { name: 'Please enter the user\'s email' }),
//         phone: this.page.getByRole('textbox', { name: 'Please enter the user\'s phone' }),
//         // address
//         searchAddress: this.page.getByRole('textbox', { name: 'Search Address' }),
//         street: this.page.getByRole('textbox', { name: 'Street Address' }),
//         city: this.page.getByRole('textbox', { name: 'Town / City' }),
//         postCode: this.page.getByRole('textbox', { name: 'Postcode' }),
//         // work
//         jobTitle: this.page.getByRole('textbox', { name: 'Please enter the user\'s job' }),
//         role: this.page.getByRole('combobox', { name: 'Please enter the user\'s role' }),
//         admin: this.page.getByRole('option', { name: 'Admin' }),
//         openGroupOptions: this.page.getByText('Select groups'),
//         quoteGivers: this.page.getByRole('option', { name: 'Quote Givers' }).getByRole('checkbox'),
//         selectAllOptions: this.page.getByRole('checkbox', { name: 'All items unselected' }),
//         // confirm
//         cancel: this.page.getByRole('button', { name: 'Cancel' }),
//         save: this.page.getByRole('button', { name: 'Save' }),
//         // success message
//         successMessage: this.page.getByText('User created successfully'),
//         // error message
//         errorMessage: this.page.getByText('User already exists'),
//         // to select a user, check it's checkbox
//         selectUser: this.page.getByRole('row', { name: `Row Unselected QT ${fname}` }).getByLabel('Row Unselected'),
//         
//         //alert messages of invalid textareas
//         firstNameErrorMessage: this.page.getByText('The first name field is required.'),
//         lastNameErrorMessage: this.page.getByText('The last name field is required.'),
//         phoneErrorMessage: this.page.getByText('Please enter a valid phone number'),
//         emailErrorMessage: this.page.getByText('The email field is required.'),
//         streetErrorMessage: this.page.getByText('Street Address is required'),
//         cityErrorMessage: this.page.getByText('Town / City is required'),
//         postcodeErrorMessage: this.page.getByText('Postcode is required'),
//         jobTitleErrorMessage: this.page.getByText('Please enter the user\'s job'),
//         roleErrorMessage: this.page.getByText('The role field must be a string.'),
//     }
//  
//     async clickOnNewUser() {
//             await this.base.fillTextByLocator(this.Elements.usernameInputLocator, "admin");
//             await this.Elements.usernameInputLocator.fill("admin");
// }



//     async clickNewUser() {
//         await this.base.waitAndClickByLocator(this.Elements.newUser);
//         console.log("Navigated to User Management page");
//     }
//     async clickDeleteUser() {
//         await this.base.waitAndClickByLocator(this.Elements.deleteUser);
//         console.log("Delete User button clicked");
//     }
//     async fillFirstName(firstName: string) {
//         await this.base.fillTextByLocator(this.Elements.firstName, fname);
//         console.log("First Name entered");
//     }
//  
//     async fillLastName(lastName: string) {
//         await this.base.fillTextByLocator(this.Elements.lastName, lname);
//         console.log("Last Name entered");
//     }
//  
//     async fillEmail(email: string) {
//         await this.base.fillTextByLocator(this.Elements.email, email);
//         console.log("Email entered");
//     }
//  
//     async fillPhone(phone: string) {
//         await this.base.fillTextByLocator(this.Elements.phone, phone);
//         console.log("Phone entered");
//     }
//     async fillStreet(street: string) {
//         await this.base.fillTextByLocator(this.Elements.street, street);
//         console.log("Street entered");
//     }
//     async fillCity(city: string) {
//         await this.base.fillTextByLocator(this.Elements.city, city);
//         console.log("City entered");
//     }
    
//     async fillPostCode(postcode: string) {
//         await this.base.fillTextByLocator(this.Elements.postCode, postcode);
//         console.log("Postcode entered");
//     }
//  
//     async fillJobTitle(jobTitle: string) {
//         await this.base.fillTextByLocator(this.Elements.jobTitle, jobTitle);
//         console.log("Job Title entered");
//     }
//  
//     async selectRole() {
//         await this.base.waitAndClickByLocator(this.Elements.role);
//         await this.base.waitAndClickByLocator(this.Elements.admin);
//         console.log("Role selected");
//     }
//  
//     async selectQuoteGivers() {
//         await this.base.waitAndClickByLocator(this.Elements.openGroupOptions);
//         await this.base.waitAndClickByLocator(this.Elements.quoteGivers);
//         console.log("Quote Givers selected");
//     }
//  
//     async fillPersonalDetails() {
//         await this.fillFirstName(fname);
//         await this.fillLastName(lname);
//         await this.fillEmail(email);
//         //await this.fillPhone(phone);
//     }
//  
//     async fillAddress() {
//         await this.fillStreet(street);
//         await this.fillCity(city);
//         await this.fillPostCode(postcode);
//     }
//  
//     async fillWork() {
//         //await this.fillJobTitle(jobTitle);
//         await this.selectRole();
//         //await this.selectQuoteGivers();
//     }
//     async clickSave() {
//         await this.base.waitAndClickByLocator(this.Elements.save);
//         console.log("Save button clicked");
//     }
//  
//     // Edit User
//     async clickEdit() {
//         await this.base.waitAndClickByLocator(this.Elements.edit);
//         console.log("Edit button clicked");
//     }
//  
//     async updateWork() {
//         //await this.fillJobTitle(jobTitle);
//         await this.selectRole();
//         //await this.selectQuoteGivers();
//     }
//     async updateAddress() {
//         await this.fillStreet(street + " updated");
//         await this.fillCity(city + " updated");
//         await this.fillPostCode(postcode);
//     }
//     async updatePersonalDetails() {
//         await this.fillFirstName(fname + "updated");
//         await this.fillLastName(lname + "updated");
//         await this.fillEmail("updated_email123@gmail.com");
//         //await this.fillPhone(phone);
//     }
//  
//     async deleteUser() {
//         await this.Elements.selectUser.check();
//         console.log("User selected");
//         await this.base.waitAndClickByLocator(this.Elements.deleteUser);
//     }
//  
//     async confirmDeleteUser() {
//     }
//  
//     async getPhoneErrorMessage() {
//         const phoneErrorMessage = await this.Elements.phoneErrorMessage.allInnerTexts();
//         console.log("Phone Error Message: " + phoneErrorMessage);
//         expect(phoneErrorMessage).toContain("Please enter a valid phone number");
//         return phoneErrorMessage;
//     }
//  
//     async getEmailErrorMessage() {
//         const emailErrorMessage = await this.Elements.emailErrorMessage.allInnerTexts();
//         console.log("Email Error Message: " + emailErrorMessage);
//         expect(emailErrorMessage).toContain("The email field is required.");
//         return emailErrorMessage;
//     }
//  
//     async getFirstNameErrorMessage() {
//         const firstNameErrorMessage = await this.Elements.firstNameErrorMessage.allInnerTexts();
//         console.log("First Name Error Message: " + firstNameErrorMessage);
//         expect(firstNameErrorMessage).toContain("The first name field is required.");
//         return firstNameErrorMessage;
//     }
//  
//     async getLastNameErrorMessage() {
//         const lastNameErrorMessage = await this.Elements.lastNameErrorMessage.allInnerTexts();
//         console.log("Last Name Error Message: " + lastNameErrorMessage);
//         expect(lastNameErrorMessage).toContain("The last name field is required.");
//         return lastNameErrorMessage;
//     }
//     async getRoleErrorMessage() {
//         const roleErrorMessage = await this.Elements.roleErrorMessage.allInnerTexts();
//         console.log("Role Error Message: " + roleErrorMessage);
//         expect(roleErrorMessage).toContain("The role field must be a string.");
//         return roleErrorMessage;
//     }  
//     
//  
//  
//     async fillInvalidData(fname: any, lname: any, email: any) {
//         await this.fillFirstName(fname);
//         await this.fillLastName(lname);
//         await this.fillEmail(email);
//         // await this.fillPhone(phone);
//         // await this.fillStreet(street);
//         // await this.fillCity(city);
//         // await this.fillPostCode(postcode);
//         await this.fillWork();
//     }
//  
//     async verifyUserName() {
//         // const userName = await this.base.getElementText(this.Elements.userName);
//         // console.log("User Name: " + userName);
//         // expect(userName).toBeTruthy();
//         // return userName;
//     }
// }