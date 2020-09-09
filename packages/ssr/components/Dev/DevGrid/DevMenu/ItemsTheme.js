import React, { useContext } from 'react';
import { useTheme, Switch, MenuItem } from '@material-ui/core';
import { THEME_TYPE } from '../../../Theme/utils';
import { ThemeContext } from '../../../Theme/hooks';

const ItemsTheme = React.forwardRef((props, ref) => {
  const themeCtx = useContext(ThemeContext);
  const theme = useTheme();

  const onChangeTheme = (themeName) => {
    // themeCtx[`onChangeTheme${capitalize(themeName)}`]();
    themeCtx.onChangeTheme(themeName);
    // handleClose();
  };
  return (
    <div>
      <MenuItem
        onClick={themeCtx.toggleThemeType}
      >
        <Switch
          checked={theme.palette.type === THEME_TYPE.dark}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </MenuItem>
      <MenuItem onClick={() => onChangeTheme('a')}>a</MenuItem>
      <MenuItem onClick={() => onChangeTheme('default')}>default</MenuItem>
      <MenuItem onClick={() => onChangeTheme('cyan')}>cyan</MenuItem>
    </div>
  );
  // ));
});

export default ItemsTheme;
