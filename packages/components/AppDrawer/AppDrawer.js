import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Divider from '@material-ui/core/Divider';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import DrawerList from './DrawerList';

const isTopOrBottom = (anchor) => anchor === 'top' || anchor === 'bottom';
const isLeft = (anchor) => anchor === 'left';

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    // justifyContent: "flex-end",
  },
}
));

const AppDrawer = ({ toggleDrawer, drawerWidth, state }) => {
  const classes = useStyles();
  return (

    ['left', 'right', 'top', 'bottom'].map((anchor) => (
      <React.Fragment key={anchor}>
        {isTopOrBottom(anchor) ? (
          <Button onClick={toggleDrawer(anchor, !state[anchor])}>
            {anchor}
          </Button>
        ) : null}
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          variant={isTopOrBottom(anchor) ? 'temporary' : 'persistent'}
          onClose={toggleDrawer(anchor, false)}
        >
          {!isTopOrBottom(anchor) && (
          <>
            <div
              className={('MuiToolbar-dense', classes.drawerHeader)}
              style={
                    isLeft(anchor)
                      ? { justifyContent: 'flex-end' }
                      : { justifyContent: 'start' }
                  }
            >
              <IconButton onClick={toggleDrawer(anchor, false)}>
                {isLeft(anchor) ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
          </>
          )}
          {/* {list(anchor)} */}
          <DrawerList
            anchor={anchor}
            drawerWidth={drawerWidth}
            isTopOrBottom={isTopOrBottom}
            toggleDrawer={toggleDrawer}
          />
        </Drawer>
      </React.Fragment>
    ))
  );
};

export default AppDrawer;
