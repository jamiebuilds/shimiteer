> **Important!** This library is not actually implemented. It's just a detailed
> idea. Implementation will arrive shortly. Come work on it with us!

# Shimiteer

> Puppeteer API shim for other browsers using WebdriverIO

## Install

```sh
yarn add shimiteer
```

## Usage

Instead of importing `puppeteer`, you can import `shimiteer`, and for the most
part you will be able to use it as a drop-in replacement.

**Before:**

```js
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  // other actions...
  await browser.close();
});
```

**After:**

```js
const shimiteer = require('shimiteer');

shimiteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  // other actions...
  await browser.close();
});
```

Using [WebdriverIO](http://webdriver.io/) we attempt to implement as much of
the puppeteer API as possible. There will be some things missing, but for many
use cases it should be good enough.
