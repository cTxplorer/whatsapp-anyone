import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

//server side rendering for material-ui https://material-ui.com/guides/server-rendering/
export default class MyDocument extends Document {
  render() {
    const title = 'WhatsApp without saving number - WhatsApp Anyone app';
    const description = 'Use this simple trick to send WhatsApp message without saving contact. This tool opens WhatsApp chat with unsaved number. For quick access, use our "Add To Home Screen" feature';
    const appName = "WhatsApp Anyone";
    const websiteUrl = "https://whatsapp-anyone.pgxplorer.dev";

    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="application-name" content={appName} />
          <meta name="theme-color" content="#191919" />
          <meta name="msapplication-TileColor" content="#191919" />
          <link rel="manifest" href="/manifest.json" />

          <link rel="canonical" href={websiteUrl}></link>

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

          {/* Primary Meta Tags */}
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={websiteUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/meta-image-03.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={websiteUrl} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/meta-image-03.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
