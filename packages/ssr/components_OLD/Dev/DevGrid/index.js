import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BrushIcon from '@material-ui/icons/BrushRounded';
import LinkIcon from '@material-ui/icons/LinkRounded';
import DevMenu from './DevMenu';
import ItemsTheme from './DevMenu/ItemsTheme';
import ItemsPages from './DevMenu/ItemsPages';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    margin: 0,
    width: '100%',
  },
}));

const DevGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item>
          <DevMenu icon={<LinkIcon fontSize="small" />}>
            <ItemsPages />
          </DevMenu>
        </Grid>
        <Grid item>
          <DevMenu icon={<BrushIcon fontSize="small" />}>
            <ItemsTheme />
          </DevMenu>
        </Grid>
      </Grid>
    </div>
  );
};

export default DevGrid;
