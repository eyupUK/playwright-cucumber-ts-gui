import { Page } from '@playwright/test';




export class LoginPage {
    public page: Page;

    public logonBtn;
    public usernnameInput;
    public passwordInput;
    public submitBtn;

    constructor(page: Page) {
        
        this.page = page;
        this.logonBtn = page.locator("#logInButton");
        this.usernnameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.submitBtn = page.locator("#login-button");
    }

    async loginWithValidCredentials(username: string, password: string) {
        await this.usernnameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitBtn.click();
    }

    async naviagateToLoginPage() {
        if (!process.env.BASEURL) {
            throw new Error("BASEURL is not defined in the environment variables.");
        }
        await this.page.goto(process.env.BASEURL);     
    }
    
}