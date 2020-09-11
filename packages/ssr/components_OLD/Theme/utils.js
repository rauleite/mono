import {
  cyan, red, purple, indigo, grey,
} from '@material-ui/core/colors';
import { isServer } from '../../src/utils';
import storage from '../../src/utils/storage';

export const THEME_TYPE = Object.freeze({
  dark: 'dark',
  light: 'light',
});

const themeTypeConfig = (themeType = 'light', cb) => {
  const isLight = themeType === 'light';
  return Object.freeze(cb((light, dark) => (isLight ? light : dark)));
};

// export const palette = Object.freeze({
// });

export const themes = {
  cyan: (themeType) => themeTypeConfig(themeType, (isLight) => ({
    name: 'cyan',
    palette: {
      type: themeType,
      background: isLight(grey[50], '#000000'),
      primary: {
        main: isLight(cyan[900], cyan[300]),
      },
    },
  })),
  default: (themeType) => themeTypeConfig(themeType, (isLight) => ({
    name: 'default',
    palette: {
      type: themeType,
      primary: {
        main: isLight(cyan[900], cyan[300]),
      },
      secondary: {
        main: purple[500],
      },
      error: {
        main: red.A400,
      },
    },
  })),
  a: (themeType) => themeTypeConfig(themeType, (isLight) => ({
    // a: (themeType = 'light') => {
    name: 'a',
    palette: {
      type: themeType,
      primary: {
        main: indigo[500],
      },
    },
  })),

};

export const systemColorScheme = () => {
  if (!isServer()) {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      return THEME_TYPE.dark;
    }
    return THEME_TYPE.light;
  }
};

/**
 * Source of truth
 */
export const getInitTheme = (initTheme) => {
  const theme = {
    name: null,
    type: null,
    // Se precisa ou não atualizar localstorage
    hasChanged: false,
  };

  if (initTheme) {
    theme.name = initTheme.name;
    theme.type = initTheme.type;
    theme.hasChanged = true;
    return theme;
  }

  const themeStg = storage.theme.get();
  const storageHasName = themeStg && themeStg.name;
  const storageHasType = themeStg && themeStg.type;

  // LocalStorage senão default
  if (storageHasName) {
    theme.name = themeStg.name;
  } else {
    theme.name = 'default';
    theme.hasChanged = true;
  }

  // LocalStorage senão systemColorScheme (media query)
  if (storageHasType) {
    theme.type = themeStg.type;
  } else {
    theme.type = systemColorScheme();
    theme.hasChanged = true;
  }

  return theme;
};
