import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import useEventListener from '@use-it/event-listener';
import { Portal } from '@material-ui/core';
import DevGrid from './DevGrid';

export default function DevComponent() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, top: !open });
  };

  let keydownCount = 0;

  useEventListener('keydown', (event) => {
    const hitsToOpen = 2;
    // const isCtrl = event.type === 'keydown' && (event.key === 'Control');
    const isCtrl = event.type === 'keydown' && (event.key === 'Control');
    if (!isCtrl) return;

    keydownCount += 1;
    const hitsNecessary = keydownCount >= hitsToOpen;

    if (hitsNecessary) {
      event.preventDefault();
      return setState({ ...state, top: !state.top });
    }

    // Intervalo não pode ser maior que 1 minuto
    const timeout = window.setTimeout(() => {
      keydownCount = 0;
    }, 1000);

    // Apenas defensivo mas nunca deve cair aqui, porque o setState vai zerar (hitsToOpen)
    if (timeout && keydownCount >= hitsToOpen) {
      window.clearTimeout(timeout);
    }

    // return true;
    // event.dispatchEvent(event);
  });

  return (
    <Portal>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        PaperProps={{
          variant: 'outlined',
        }}
        variant="persistent"
      >
        <DevGrid />
      </Drawer>
    </Portal>
  );
}
