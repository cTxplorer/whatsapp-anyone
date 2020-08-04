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
      e.preventDefault();
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
          <header>
            <img src="icons/icon.svg" className="logo" alt="" />
            <h1 className="title">WhatsApp Anyone</h1>
          </header>

          <main>
            <ul className="features-ul">
              <li className="feature-li">
                <h3>Hassle free&nbsp;🧘‍♀️</h3>
                <div>no need to save contact to chat with someone</div>
                {/* <div>no need to save contact</div> */}
              </li>
              <li className="feature-li">
                <h3>Fully secure&nbsp;🙇🏻‍♂️</h3>
                <div>contact data stays in your mobile</div>
              </li>
              <li className="feature-li">
                <h3>Just a tap away&nbsp;🚀</h3>
                <div>
                  <div onClick={onA2hsClickHandler} className={`a2hs ${showA2HS ? 'a2hs-loaded' : ''}`}>
                    {showA2HS ? 'add me to home screen' : 'quicker than quickest..'}
                  </div>
                </div>
              </li>
            </ul>
            <Form />

          </main>
          {/* <footer>
            <div className="creds">
              👨🏻‍🎨 <a href="https://twitter.com/nzeus_nisarg610" target="__blank">Nisarg </a>
            /
            <a href="https://twitter.com/@pGxplorer_" target="__blank"> Pratik</a> 👨🏼‍💻
          </div>
          </footer> */}
        </div>
      </Layout>
    </>
  );
}

export default HomePage;