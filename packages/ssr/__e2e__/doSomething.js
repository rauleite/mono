import '@testing-library/jest-dom/extend-expect';

beforeAll(async () => {
  await page.goto('https://whatismybrowser.com/');
  // await page.goto('http://192.168.2.2:3000')
});

test('should display "Chrome|Firefox|Webkit" text on page', async () => {
  const browser = await page.$eval('.string-major', (el) => el.innerHTML);
  // expect(browser).toContain('Chrome')
  // expect(browser).toMatch(/Safari/gi)
  expect(browser).toMatch(/Chrome|Firefox|Safari/gi);
});
