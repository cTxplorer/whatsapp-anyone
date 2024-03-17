import Head from 'next/head';
import { useEffect, useState } from 'react';
import HomePage from '../components/HomePage';
import { CountryContext } from '../context/CountryContext';


const title = 'WhatsApp without saving number - WhatsApp Anyone app';
const description = 'Use this simple trick to send WhatsApp message without saving contact. This tool opens WhatsApp chat with unsaved number. For quick access, use our "Add To Home Screen" feature';
const websiteUrl = "https://whatsapp-anyone.pgxplorer.dev";

const App = () => {
    const [countryFromIp, setCountryFromIp] = useState();

    useEffect(() => {
        const lastSelectedCountryIso2 = localStorage.getItem("lastSelectedCountryIso2");
        if (lastSelectedCountryIso2) {
            setCountryFromIp(lastSelectedCountryIso2);
        } else {
            fetch('http://ip-api.com/json/?fields=16387')
            .then(res => res.json())
            .then((res) => {
                if (res?.status === 'success' && res.countryCode) {
                    setCountryFromIp(res.countryCode.toLowerCase());
                } else {
                    setCountryFromIp('in')
                }
            })
            .catch(err => console.error(err));
        }
    }, []);
    return (
        <>
        <Head>
          <link rel="canonical" href={websiteUrl}></link>

          <title>{title}</title>

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
            <CountryContext.Provider value={countryFromIp}>
                <HomePage />
            </CountryContext.Provider>
        </>
    )
};

export default App;