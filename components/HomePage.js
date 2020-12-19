import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from './Layout';
import Form from './Form';

// import styles from './HomePage.css';

const HomePage = () => {
  const [showA2HS, updateShowA2HS] = useState(false);
  const [deferredPrompt, updatedDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      updateShowA2HS(true);
      updatedDeferredPrompt(e);
    });
  }, []);

  const onA2hsClickHandler = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          updateShowA2HS(false);
        }
      });
    }
  }

  return (
    <>
      <Layout>
        <div className="app">
          {/* start:header section */}
          <header>
            <img src="icons/icon.svg" className="logo" alt="" />
            <h1 className="title">WhatsApp Anyone</h1>
            <p className="subtitle"><em>without saving contact number</em></p>
          </header>
          {/* end:header section */}

          {/* start:input fields */}
          <main>
            <Form />
          </main>
          {/* end:input fields */}

          {/* start:add to homescreen section */}
          <aside>
            <div onClick={onA2hsClickHandler} className={`a2hs ${showA2HS ? 'a2hs-loaded' : ''}`}>
              {showA2HS ? 'add this tool to your home screen' : ''}
            </div>
          </aside>
          {/* end:add to homescreen section */}

          {/* start:footer section */}
          <footer>
            <div className="creds">
              👨🏻‍🎨
              <a href="https://www.linkedin.com/in/nisarg-rajpura/" target="__blank"> Nisarg </a>
              x
              <a href="https://www.linkedin.com/in/pratikgadhiya/" target="__blank"> Pratik </a>
              👨🏼‍💻
            </div>
          </footer>
          {/* end:footer section */}
        </div>
      </Layout>
    </>
  );
}

export default HomePage;