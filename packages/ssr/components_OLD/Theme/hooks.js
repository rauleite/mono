import React from 'react';
import { themes, getInitTheme } from './utils';
import storage from '../../src/utils/storage';

export const ThemeContext = React.createContext({});

// eslint-disable-next-line import/prefer-default-export
export const useCustomTheme = (initTheme) => {
  const setNewTheme = ({ name, type, hasChanged }) => {
    if (hasChanged) {
      storage.theme.set({ name, type }, { isAsync: true });
    }
    return themes[name](type);
  };

  const [theme, setTheme] = React.useState(() => setNewTheme(getInitTheme(initTheme)));

  const customSetTheme = ({ name, type }) => {
    const isNewName = theme.name !== name;
    const isNewType = theme.palette.type !== type;
    if (!isNewName && !isNewType) {
      return;
    }
    setTheme(setNewTheme({ name, type, hasChanged: true }));
  };
  return [theme, customSetTheme];
};
