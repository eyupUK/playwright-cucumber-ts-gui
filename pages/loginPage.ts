import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly Elements = {
    logonBtn: this.page.locator('#logInButton'),
    usernameInput: this.page.locator('#user-name'),
    passwordInput: this.page.locator('#password'),
    submitBtn: this.page.locator('#login-button'),
    errorMsg: this.page.locator("h3[data-test='error']"),
  };

  getElements() {
    return this.Elements;
  }

  async loginWithValidCredentials(username: string, password: string): Promise<void> {
    await this.fill(this.Elements.usernameInput, username);
    await this.fill(this.Elements.passwordInput, password);
    await this.click(this.Elements.submitBtn);
  }

  async navigateToLoginPage(): Promise<void> {
    if (!process.env.BASEURL) {
      throw new Error('BASEURL is not defined in the environment variables.');
    }
    await this.goto(process.env.BASEURL);
  }

  async getTitle() {
    return this.page.locator('.title').innerText();
  }

  async fillLogin(username: string, password: string) {
    await this.page.waitForLoadState();
    await this.Elements.usernameInput.fill(username);
    await this.Elements.passwordInput.fill(password);
    console.log('login filled');
  }

  async clickLogin() {
    await this.Elements.logonBtn.click();
    console.log('Login clicked');
  }

  async getErrorMessage() {
    return this.Elements.errorMsg.innerText();
  }
}
