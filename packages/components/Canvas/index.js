import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import dynamic from 'next/dynamic';
import AppDrawer from '../AppDrawer';
// import CardBusinessSkeleton from './CardBusinessSkeleton';
import { canvasState, toggleDrawer } from './canvas';

const transitionShift = (theme) => ({
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const appBarTransition = (theme) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const useStyles = (drawerWidth) => makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButtonLeft: {
    marginRight: theme.spacing(2),
  },
  menuButtonRight: {
    marginLeft: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShiftLeft: {
    transition: appBarTransition(theme),
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  appBarShiftRight: {
    transition: appBarTransition(theme),
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  appBarShiftLeftAndRight: {
    transition: appBarTransition(theme),
    width: `calc(100% - ${drawerWidth * 2}px)`,
    marginRight: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShiftLeft: {
    transition: transitionShift(theme),
    marginLeft: drawerWidth,
  },
  contentShiftRight: {
    transition: transitionShift(theme),
    marginRight: drawerWidth,
  },
}));

const Canvas = ({ drawerWidth }) => {
  const classes = useStyles(drawerWidth)();
  const [state, setState] = React.useState(canvasState);

  const canvasToggleDrawer = toggleDrawer(state, setState);

  const CardBusiness = dynamic(
    () => import('./CardBusiness'),
    {
      ssr: false,
      // loading: CardBusinessSkeleton,
    },
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShiftLeft]: state.left,
          [classes.appBarShiftRight]: state.right,
          [classes.appBarShiftLeftAndRight]: state.right && state.left,
        })}
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={toggleDrawer('left', true)}
            onClick={canvasToggleDrawer('left', true)}
            edge="start"
            className={clsx(classes.menuButtonLeft, state.left && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Canvas
          </Typography>
          <Box flexGrow="1" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={canvasToggleDrawer('right', true)}
            edge="start"
            className={clsx(
              classes.menuButtonRight,
              state.right && classes.hide,
            )}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="column">
        {/* <div className={classes.drawerHeader} /> */}
        <div className="MuiToolbar-dense" />

        <div
          className={clsx(classes.content, {
            [classes.contentShiftLeft]: state.left,
            [classes.contentShiftRight]: state.right,
          })}
        >
          <Box>
            <AppDrawer
              toggleDrawer={canvasToggleDrawer}
              anchors={state}
              drawerWidth={drawerWidth}
            />
          </Box>
          <Box>
            <main>
              {/* <div className="MuiToolbar-dense" /> */}
              <Box>
                <CardBusiness drawerWidth={500} />

              </Box>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
                augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
              {/* </div> */}
            </main>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Canvas;
