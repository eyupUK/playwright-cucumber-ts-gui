# Base Page Documentation

## Overview

The `BasePage` class is an abstract base class that provides common functionality for all page objects in the Playwright automation framework. It contains reusable methods for interacting with web elements, handling navigation, and performing common tasks.

## Features

### Navigation Methods

- `goto(url?: string)` - Navigate to a URL (defaults to baseUrl)
- `reload()` - Reload the current page
- `goBack()` - Navigate back in browser history
- `goForward()` - Navigate forward in browser history

### Wait Methods

- `waitForElement(locator, timeout?)` - Wait for element to be visible
- `waitForElementToBeHidden(locator, timeout?)` - Wait for element to be hidden
- `waitForPageLoad()` - Wait for page to fully load
- `waitForUrl(url, timeout?)` - Wait for URL to match pattern

### Click Methods

- `click(locator)` - Click on element after waiting for it to be visible
- `doubleClick(locator)` - Double click on element
- `rightClick(locator)` - Right click on element
- `clickNth(locator, index)` - Click on nth element from locator

### Input Methods

- `fill(locator, text)` - Clear and fill text input
- `type(locator, text, delay?)` - Type text with optional delay
- `pressKey(locator, key)` - Press keyboard key

### Selection Methods

- `selectOption(locator, option)` - Select option from dropdown
- `check(locator)` - Check checkbox/radio button
- `uncheck(locator)` - Uncheck checkbox/radio button

### Text and Attribute Methods

- `getText(locator)` - Get element's inner text
- `getTextContent(locator)` - Get element's text content
- `getValue(locator)` - Get input value
- `getAttribute(locator, attribute)` - Get element attribute

### Visibility and State Methods

- `isVisible(locator)` - Check if element is visible
- `isHidden(locator)` - Check if element is hidden
- `isEnabled(locator)` - Check if element is enabled
- `isDisabled(locator)` - Check if element is disabled
- `isChecked(locator)` - Check if checkbox/radio is checked

### Utility Methods

- `getCount(locator)` - Get count of elements matching locator
- `scrollIntoView(locator)` - Scroll element into view
- `scrollToTop()` - Scroll to top of page
- `scrollToBottom()` - Scroll to bottom of page
- `hover(locator)` - Hover over element
- `sleep(seconds)` - Wait for specified seconds
- `getCurrentUrl()` - Get current page URL
- `getTitle()` - Get page title
- `dragAndDrop(source, target)` - Drag and drop elements

### File Handling

- `uploadFile(locator, filePath)` - Upload file to file input
- `downloadFile(locator)` - Download file and return path

### Screenshot Methods

- `takeScreenshot(name?)` - Take full page screenshot
- `takeElementScreenshot(locator, name?)` - Take element screenshot

### Alert Handling

- `acceptAlert()` - Accept browser alert
- `dismissAlert()` - Dismiss browser alert
- `getAlertText()` - Get alert message text

### Storage Methods

- `setLocalStorage(key, value)` - Set localStorage item
- `getLocalStorage(key)` - Get localStorage item
- `clearLocalStorage()` - Clear all localStorage
- `setSessionStorage(key, value)` - Set sessionStorage item
- `getSessionStorage(key)` - Get sessionStorage item
- `clearSessionStorage()` - Clear all sessionStorage

### Cookie Methods

- `getCookies()` - Get all cookies
- `setCookie(name, value, domain?)` - Set cookie
- `clearCookies()` - Clear all cookies

## Usage Example

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private readonly Elements = {
    usernameInput: this.page.locator('#username'),
    passwordInput: this.page.locator('#password'),
    submitBtn: this.page.locator('#login-button'),
  };

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string): Promise<void> {
    // Navigate to login page
    await this.goto('/login');

    // Fill credentials using base page methods
    await this.fill(this.Elements.usernameInput, username);
    await this.fill(this.Elements.passwordInput, password);

    // Click submit button
    await this.click(this.Elements.submitBtn);

    // Wait for navigation
    await this.waitForUrl(/dashboard/);
  }

  async isLoginSuccessful(): Promise<boolean> {
    // Check if we're on dashboard page
    const currentUrl = await this.getCurrentUrl();
    return currentUrl.includes('dashboard');
  }
}
```

## Best Practices

1. **Always extend BasePage** - All page objects should extend the BasePage class
2. **Use base methods** - Prefer base page methods over direct Playwright API calls
3. **Define Elements** - Use a readonly Elements object to define locators
4. **Add type annotations** - Always add Promise<void> or appropriate return types
5. **Handle waits** - Base page methods include automatic waits, but add explicit waits when needed
6. **Error handling** - Base page methods include try-catch blocks for robustness

## Benefits

- **Consistency** - All pages use the same interaction patterns
- **Maintainability** - Common functionality is centralized
- **Reliability** - Built-in waits and error handling
- **Reusability** - Methods can be used across all page objects
- **Extensibility** - Easy to add new common functionality

## Environment Variables

The base page uses the following environment variables:

- `BASEURL` - Default base URL for navigation (defaults to 'http://localhost:3000')
