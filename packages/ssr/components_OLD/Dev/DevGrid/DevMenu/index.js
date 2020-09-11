import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import BrushIcon from '@material-ui/icons/BrushRounded';

// eslint-disable-next-line react/prop-types
// const DevMenu = ({ icon, children }) => {
const DevMenu = React.forwardRef(({ icon, children }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // {icon}

  // const MuiMenu = React.forwardRef((props, ref) => (
  //   <Menu
  //     {...props}
  //     ref={ref}
  //   />
  // ));

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon fontSize="small" />}
        size="small"
      >
        {/* <BrushIcon fontSize="small" /> */}
        {icon}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        ref={ref}
      >
        {children}
      </Menu>
      {/* <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}

      >
        {children}
      </MuiMenu> */}
    </div>
  );
});

export default DevMenu;
