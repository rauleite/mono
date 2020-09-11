import React from 'react';
import { ThemeProvider, createMuiTheme, Hidden } from '@material-ui/core';
import Dev from '../Dev';
import { useCustomTheme, ThemeContext } from './hooks';
import { THEME_TYPE } from './utils';

// eslint-disable-next-line react/prop-types
export default function CustomThemeProvider({ children }) {
  const [customTheme, setCustomTheme] = useCustomTheme();

  const onChangeTheme = (name) => {
    const { type } = customTheme.palette;
    setCustomTheme({ name, type });
  };

  const toggleThemeType = () => {
    const { name } = customTheme;

    const type = customTheme.palette.type === THEME_TYPE.light
      ? THEME_TYPE.dark
      : THEME_TYPE.light;

    setCustomTheme({ name, type });
  };
  return (
    <ThemeProvider theme={createMuiTheme(customTheme)}>
      {/* Esconder SSR, para evitar flickering de dark mode */}
      {/* <Hidden xsDown implementation="css"> */}
      <ThemeContext.Provider value={{ toggleThemeType, onChangeTheme }}>

        <Dev />
        {children}
      </ThemeContext.Provider>
      {/* </Hidden> */}
    </ThemeProvider>
  );
}
