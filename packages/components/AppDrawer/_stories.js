/* eslint-disable import/prefer-default-export */
import React, { useState} from 'react';
// import { useArgs } from '@storybook/client-api';
import AppDrawerComponent from '.';
import { canvasState, toggleDrawer } from '../Canvas/canvas';

export default {
  title: 'Drawers',
  component: AppDrawerComponent,
};

export const AppDrawer = (args) => {
  // const [state, setState] = useState({ anchors: args.anchors || canvasState })
  const [state, setState] = useState({ anchors: args.anchors})

  const docToggleDrawer = toggleDrawer(
    args.anchors,
    (newArgs) => {
      args.anchors = newArgs
      setState({anchors: newArgs})
  }
  )
  return (
    <AppDrawerComponent
      {...args}
      toggleDrawer={docToggleDrawer}
    />
  );
};

AppDrawer.args = {
  drawerWidth: 300,
  anchors: canvasState,
};

// AppDrawer.argTypes = {
//   anchors: { control: 'object'}
// }

// argTypes: {
//   anchors: { control: 'boolean'}
// }