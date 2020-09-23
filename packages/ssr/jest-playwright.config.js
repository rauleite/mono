// xs: 0-599
const xs = [
  {
    name: 'Mobile - iPhone [xs min]',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 300,
      height: 400,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: 'webkit',
  },
  {
    name: 'Mobile - Galaxy [xs max]',
    userAgent: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 500,
      height: 840,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: 'chromium',
  },
];
// sm: 600-959
const sm = [
  {
    name: 'Mobile - Kindle [sm min]',
    userAgent: 'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true',
    viewport: {
      width: 700,
      height: 1280,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  },
  {
    name: 'Mobile - Nexus [sm max]',
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 900,
      height: 1280,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  },
];
// md: 960-1279
const md = [
  {
    name: 'Mobile - iPad [md min]',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1000,
      height: 1194,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: 'webkit',

  },
  {
    // name: 'Kindle Fire HDX landscape [CUSTOM]',
    name: 'Desktop [md max]',
    // userAgent: 'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true',
    viewport: {
      width: 1200,
      height: 800,
    },
    deviceScaleFactor: 2,
    isMobile: false,
    hasTouch: false,
    defaultBrowserType: 'chromium',
  },
];
// lg: 1280-1919
const lg = [
  {
    name: 'Desktop [lg min]',
    // userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1350,
      height: 834,
    },
    deviceScaleFactor: 2,
    isMobile: false,
    hasTouch: false,
    defaultBrowserType: 'firefox',
  },
  {
    name: 'Desktop [lg max]',
    // userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 1850,
      height: 800,
    },
    deviceScaleFactor: 2,
    isMobile: false,
    hasTouch: false,
    defaultBrowserType: 'chromium',
  },
];
// xl: 1920-*
const xl = [
  {
    // name: 'Kindle Fire HDX landscape [CUSTOM]',
    name: 'Desktop [xl min]',
    viewport: {
      width: 2000,
      height: 1200,
    },
    // deviceScaleFactor: 2,
    isMobile: false,
    hasTouch: false,
    defaultBrowserType: 'webkit',
  },
  {
    name: 'Desktop [xl max]',
    viewport: {
      width: 3840,
      height: 2160,
    },
    // deviceScaleFactor: 4,
    isMobile: false,
    hasTouch: false,
    defaultBrowserType: 'chromium',
  },
];

module.exports = {
  launchOptions: {
    headless: true,
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    // viewport: {
    //   width: 1920,
    //   height: 1080,
    // },
  },
  browsers: ['chromium', 'webkit'],
  devices: [...xs, ...sm, ...md, ...lg, ...xl],
};
