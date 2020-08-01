import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Form from '../components/Form';

const App = () => {

  const [deferredPrompt, updatedDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      updatedDeferredPrompt(e);
    });
  }, []);

  const onA2hsClickHandler = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  }

  return (
    <>
      <Head>
        <title>Whatsapp unsaved contact</title>
      </Head>
      <Layout>

        <h1 className="display-5">WhatsApp unsaved contact</h1>
        <p className="lead">No hassle. Send whatsapp to anyone without saving number.</p>

        <Form />

        <button className="btn btn-secondary" onClick={onA2hsClickHandler}>Add to home screen</button>
      </Layout>
    </>
  );
}

export default App;