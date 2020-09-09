import React, { useEffect } from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ApolloProvider } from '@apollo/client';
import { useTheme } from '@material-ui/core';
import { useApollo } from '../apollo/client';

import CustomThemeProvider from '../components/Theme/CustomThemeProvider';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const theme = useTheme();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <CustomThemeProvider>
        <Head>
          <title>Canvas</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192.png" />
          <meta
            name="description"
            content="make your Next.js application work offline using service workers via Google's workbox"
          />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        {/* <Dev theme={devTheme} /> */}

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </CustomThemeProvider>
    </ApolloProvider>
  );
}
// }
