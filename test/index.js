// @flow
const test = require('ava');
const shimiteer = require('../src');

test('launches browser', async t => {
  let browser = await shimiteer.launch();
  let page = await browser.newPage();
  await page.goto('https://www.google.com');
  await browser.close();
  t.pass();
});
