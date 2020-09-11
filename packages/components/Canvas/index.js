import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import dynamic from 'next/dynamic';
// import { constants } from '../../src/utils/screen';
// import CardBusinessSkeleton from './CardBusinessSkeleton';

// const drawerWidth = constants.DRAWER_WIDTH;

const isTopOrBottom = (anchor) => anchor === 'top' || anchor === 'bottom';
const isLeft = (anchor) => anchor === 'left';
// const isRight = (anchor) => anchor === 'right';

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
  list: {
    width: drawerWidth,
  },
  fullList: {
    width: 'auto',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    // justifyContent: "flex-end",
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
  console.log('Canvas -> drawerWidth', drawerWidth);
  const classes = useStyles(drawerWidth);
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        // [classes.fullList]: anchor === "top" || anchor === "bottom",
        [classes.fullList]: isTopOrBottom(anchor),
      })}
      role="presentation"
      onClick={isTopOrBottom(anchor) ? toggleDrawer(anchor, false) : null}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const CardBusiness = dynamic(
    () => import('./CardBusiness'),
    {
      ssr: false,
      // loading: CardBusinessSkeleton,
    },
  );

  return (
    // <div className={classes.root}>
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
            onClick={toggleDrawer('left', true)}
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
            onClick={toggleDrawer('right', true)}
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
            {['left', 'right', 'top', 'bottom'].map((anchor) => (
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
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
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
