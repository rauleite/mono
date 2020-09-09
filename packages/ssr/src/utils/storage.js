// import { log } from '@luar/utils/log';
import utils, { log } from '@luar/utils';

// const { isServer } = utils;

console.log('utils', utils);
console.log('log', log);
// console.log('isServer', isServer);

export const STORAGE_THEME_TYPE_KEY = 'themeTypeKey';
export const STORAGE_THEME_NAME_KEY = 'themeNameKey';
export const STORAGE_THEME_KEY = 'themeKey';

const getItem = (key) => {
  if (utils.isServer()) return null;
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    log.error('getItem -> err', err);
  }
};

const setItem = (key, value) => {
  if (utils.isServer()) return null;
  return localStorage.setItem(key, JSON.stringify(value));
};

const storage = {
  theme: {},
};

/**
 * @param {string} key
 */
storage.getItem = (key) => getItem(key);
/**
 * @param {string} key localstorage key
 * @param {string} value localstorage value
 */
storage.setItem = (key, value) => {
  setItem(key, value);
};

/**
 * Async get
 * @param {string} key
 */
storage.getItemAsync = async (key) => {
  await null;
  return getItem(key);
};

/**
 * Async set
 * @param {string} key localstorage key
 * @param {string} value localstorage value
 */
storage.setItemAsync = async (key, value) => {
  await null;
  setItem(key, value);

  // log.time({
  //   toRun: () => storage.setItem(key, value),
  //   // localStorage.setItem(key, JSON.stringify(value)),
  //   label: 'seItem',
  //   info: ['async setItem(key, value)', key, value],
  // });
};

/**
 * Do correct call on sync or async as opstions.isAsync
 * @param {string} key
 * @param {srting} value
 * @param {object} options
 */
const setInterface = (key, value, { isAsync = false }) => {
  if (isAsync) {
    return storage.setItemAsync(key, value);
  }
  return storage.setItem(key, value);
};
/**
 * Do correct call on sync or async as opstions.isAsync
 * @param {string} key
 * @param {object} options
 */
const getInterface = (key, { isAsync }) => {
  if (isAsync) {
    return storage.getItemAsync(key);
  }
  return storage.getItem(key);
};

const optionsDefault = {
  isAsync: false,
};

/**
     * STORAGE_THEME_TYPE_KEY
     * @param {{isAsync: false}} options
     */

storage.getThemeType = (options = optionsDefault) => (
  getInterface(STORAGE_THEME_TYPE_KEY, options)
);
/**
   * STORAGE_THEME_TYPE_KEY
   * @param {string} value
   * @param {{isAsync: false}} options
   */
storage.theme.setType = (value, options = optionsDefault) => (
  setInterface(STORAGE_THEME_TYPE_KEY, value, options)
);
/**
   * STORAGE_THEME_NAME_KEY
   * @param {{isAsync: false}} options
   */

storage.theme.getName = (options = optionsDefault) => (
  getInterface(STORAGE_THEME_NAME_KEY, options)
);
/**
   * STORAGE_THEME_NAME_KEY
   * @param {string} value
   * @param {{isAsync: false}} options
   */
storage.theme.setName = (value, options = optionsDefault) => (
  setInterface(STORAGE_THEME_NAME_KEY, value, options)
);
/**
   * STORAGE_THEME_KEY
   * @param {{isAsync: false}} options
   */
storage.theme.get = (options = optionsDefault) => (
  getInterface(STORAGE_THEME_KEY, options)
);
/**
   * STORAGE_THEME_KEY
   * @param {string} value
   * @param {{isAsync: false}} options
   */
storage.theme.set = (value, options = optionsDefault) => (
  setInterface(STORAGE_THEME_KEY, value, options)
);

export default storage;
// export const setThemeName = (value, { isAsync = false }) => {
//   if (isAsync) {
//     return localStgAsync.setItem(STORAGE_THEME_NAME_KEY, value);
//   }
//   return storage.setItem(STORAGE_THEME_NAME_KEY, value);
// };

// import { loadScript, isServer } from '.';

// const localforage = {
//   src: 'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.9.0/localforage.min.js',
//   integrity:
// 'sha512-GkJRKF+k/yzHfJUg9LrNLQhS0jorQe4kES+GHkqtQThCJ5z5A1KwCXH0GYbJApDh/a3ERFvq9xbRJY9mEXzQiA==',
//   crossorigin: 'anonymous',
//   defer: true,
// };

// const storage = async () => {
//   if (!isServer()) return;
//   if (window.localforage) {
//     console.log('Já tem instância de', window.localforage);
//   }
//   await loadScript(localforage);
// };
// export default storage;
