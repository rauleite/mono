import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { isDev } from '../../src/utils';

// Call only in dev env
// eslint-disable-next-line react/prop-types
export default React.memo(() => {
  const DevComponent = isDev
    ? dynamic(
      () => import('./DevComponent'),
      { ssr: false },
    )
    : () => <></>;
  return <DevComponent />;
});
