/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import AppDrawerComponent from '.';
import { canvasState, toggleDrawer } from '../Canvas/canvas';

export default {
  title: 'Drawers',
  component: AppDrawerComponent,
};

export const AppDrawer = (args) => {
  const [state, setState] = useState(canvasState);
  const docToggleDrawer = toggleDrawer(state, setState);

  return (
    <AppDrawerComponent
      {...args}
      state={state}
      toggleDrawer={docToggleDrawer}
    />
  );
};

AppDrawer.args = {
  drawerWidth: 300,
};
