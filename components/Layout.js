import Header from './Header';
import Head from 'next/head';

const Layout = (props) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Whatsapp to anyone without saving their contact" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#25D366" />
      <title>Whatsapp anyone, easily</title>

      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Whatsapp anyone, easily" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      {/* <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" /> */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lux/bootstrap.min.css" />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173602150-1"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-173602150-1');
        `}}
      />

      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PX3GJKT');`}} />
    </Head>

    {/* Google Tag Manager (noscript) */}
    <noscript
      dangerouslySetInnerHTML={{__html:
      `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PX3GJKT" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
      }}
    />


    {/* <Header /> */}
    <div className="container mt-3 text-center">
      {props.children}
    </div>
  </>
);

export default Layout;