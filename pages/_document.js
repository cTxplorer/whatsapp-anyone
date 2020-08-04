import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

//server side rendering for material-ui https://material-ui.com/guides/server-rendering/
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="application-name" content="Whatsapp Anyone" />
          <meta name="theme-color" content="#191919" />
          <meta name="msapplication-TileColor" content="#191919" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="favicon/favicon.ico" />

          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#191919" />

          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content="Whatsapp Anyone" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />

          {/* Primary Meta Tags */}
          <meta name="title" content="WhatsApp Anyone - without saving contact 🚀" />
          <meta name="description" content=".. and you can add it to your home screen ✨ hassle-free / secure / pwa-ready" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://whatsapp-anyone.netlify.app/" />
          <meta property="og:title" content="WhatsApp Anyone - without saving contact 🚀" />
          <meta property="og:description" content=".. and you can add it to your home screen ✨ hassle-free / secure / pwa-ready" />
          <meta property="og:image" content="/meta-image.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://whatsapp-anyone.netlify.app/" />
          <meta property="twitter:title" content="WhatsApp Anyone - without saving contact 🚀" />
          <meta property="twitter:description" content=".. and you can add it to your home screen ✨ hassle-free / secure / pwa-ready" />
          <meta property="twitter:image" content="/meta-image.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}