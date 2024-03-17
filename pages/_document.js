import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

//server side rendering for material-ui https://material-ui.com/guides/server-rendering/
export default class MyDocument extends Document {
  render() {
    const appName = "WhatsApp Anyone";

    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="application-name" content={appName} />
          <meta name="theme-color" content="#191919" />
          <meta name="msapplication-TileColor" content="#191919" />
          <link rel="manifest" href="/manifest.json" />

          {process.env.BUILD_ENV !== 'production' && <meta name="robots" content="noindex, nofollow" />}

          <link rel="icon" href="favicon/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#191919" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content={appName} />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
