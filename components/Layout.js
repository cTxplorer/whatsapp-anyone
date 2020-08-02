import Head from 'next/head';

const Layout = (props) => (
  <>
    <Head>
      <title>WhatsApp Anyone, easily</title>

      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap" rel="stylesheet" />

      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lux/bootstrap.min.css" /> */}

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

    {props.children}
  </>
);

export default Layout;