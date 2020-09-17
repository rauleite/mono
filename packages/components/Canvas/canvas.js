export const toggleDrawer = (state, setState) => (anchor, open) => (event) => {
  if (
    event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

export const canvasState = {
  top: false,
  left: true,
  bottom: false,
  right: true,
};
