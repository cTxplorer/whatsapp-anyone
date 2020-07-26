import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

//server side rendering for material-ui https://material-ui.com/guides/server-rendering/
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icons/icon-92x92" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}