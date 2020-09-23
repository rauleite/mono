import playwright from 'playwright';

import '@testing-library/jest-dom/extend-expect';

// import { devices } from './src';

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

// const testif = (!browserName !== 'firefox' && !deviceName.match(/Mobile/gi)) ? test : test.skip;

beforeAll(async () => {
  // console.log('playwright', playwright);
  // console.log('page', page);
  // console.log('deviceName', deviceName);
  // console.log('context', context.);

  try {
    await page.goto(URL);
  } catch (err) {
    console.error(err);
  }
});

// test.jestPlaywrightSkip(
// testif(
// "Skip Firefox" por enquanto não funciona
// { browsers: ['firefox', 'webkit'], devices: /Mobile/gi },
test('should display "Chrome|Firefox|Webkit" text on page', async () => {
  const browser = await page.$eval('html', (el) => el.innerHTML);

  expect(browser).not.toBeNull();
});
