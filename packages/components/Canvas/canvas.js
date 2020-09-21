export const toggleDrawer = (anchors, setAnchors) => (anchor, open) => (event) => {
  if (
    event
    && event.type === 'keydown'
    && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
  setAnchors({ ...anchors, [anchor]: open });
};

export const canvasState = {
  top: false,
  left: true,
  bottom: false,
  right: true,
};
