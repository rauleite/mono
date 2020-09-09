import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Link from '../../src/Link';
import pages from './pages';

const useStyles = makeStyles((theme) => ({
  skipLink: {
    position: 'absolute',
    top: '-40px',
    left: '0',
    background: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    padding: theme.spacing(1),
    zIndex: theme.zIndex,

    '&:focus': {
      top: 3,
      left: 3,
    },
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <Link
        // component="button"
        className={classes.skipLink}
        href="#maincontent"
      >
        Escapar para parte principal
      </Link>
      <main id="#maincontent">
        <Box style={{ textAlign: 'center', height: '100%', border: '1px solid red' }}>
          {pages.map((page) => (
            <React.Fragment key={page.url}>
              <Link href={page.url}>
                {page.label}
              </Link>
              <br />

            </React.Fragment>
          ))}
        </Box>
      </main>
    </>
  );
}
