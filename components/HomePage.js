import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import Layout from './Layout';
import Form from './Form';
import { faqs } from '../FAQs';
import MultiCards from './MultiCards';

// import styles from './HomePage.css';

const HomePage = () => {
  const [showA2HS, updateShowA2HS] = useState(false);
  const [deferredPrompt, updatedDeferredPrompt] = useState(null);
  const country = useContext(CountryContext);

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
        <main>
          <div className="fold fold1">
            <header>
              <img src="icons/icon.svg" className="logo" alt="" />
              <h1 className="title">WhatsApp Anyone</h1>
            </header>
            <section style={{ alignSelf: 'stretch', marginTop: 24, marginBottom: 24 }}>
              <Form country={country} />
            </section>
            <section>
              <ul className="features-ul">
                <li className="feature-li">
                  <h3>Open direct WhatsApp chat</h3>
                  <div>without saving contact</div>
                </li>
                <li className="feature-li" id="a2hs-anchor">
                  <h3>No app installation&nbsp;</h3>
                  <div>
                  <span>light-weight · secure</span>
                  {showA2HS && " · "}
                    <span onClick={onA2hsClickHandler} className={`a2hs ${ showA2HS ? 'a2hs-loaded' : '' }`}>
                      {showA2HS ? "Add to Home Screen 📱" : ""}
                    </span>
                  </div>
                </li>
                <li className="feature-li">
                  <h3>It's very SIMPLE</h3>
                  <div>no need to save number</div>
                  {/* <div>to message or call unsaved contact on WA</div> */}
                </li>
              </ul>
            </section>
          </div>
        </main>

        <div className="fold fold3 no-minimum">
          <section className="usecases">
            <h2 style={{ fontSize: '1.5em', marginBottom: 36 }}>Simple Tool, Many Use-cases</h2>
            <MultiCards content={[
              {
                title: "Send one-off message",
                content: "You can send one-off WhatsApp message or call without saving number"
              },
              {
                title: "Enquire local business",
                content: "Reach out to a local business for a quick inquiry without cluttering your phonebook"
              },
              {
                title: "Quick chat or call from WhatsApp Web",
                content: "If you on desktop, send WA message or call directly without picking phone to save contact"
              },
              {
                title: "And many more..",
                content: <>How is this tool helping you? Please <strong><span role="button" id="feedback-btn">share your use-case</span>, and we will feature it!</strong>!</>
              }
            ]} />
          </section>
        </div>

        <div className="fold fold2 no-minimum">
          <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Questions & Answers</h2>
            <div style={{ width: 650, maxWidth: "100vw", marginLeft: -10, marginRight: -10 }}>
              {faqs.map(faq => (
                <details className='faq-block'>
                  <summary className='faq-question'>{faq.q}</summary>
                  {faq.a}
                </details>
              ))}
            </div>
          </article>
        </div>

        <div style={{ height: 64 }}></div>
        <div className='fold fold3 no-minimum'>
          <section className="usecases">
          <h2 style={{ fontSize: '1.5em', marginBottom: 36 }}>User Reviews</h2>
                <MultiCards content={[
                  {
                    title: <>“</>,
                    content: <>Great work, thank you for sharing! I added the shortcut to my home screen so it is easy to use whenever. Thanks a lot!</>,
                  },
                  {
                    title: <>“</>,
                    content: <>Fantastic project. Really hate to save someone’s number just to text them on WhatsApp. Love the source code too, very easy to read.</>
                  }
                ]} />
          </section>
        </div>

        <div style={{ height: 64 }}></div>
        <div className='fold fold3 no-minimum'>
          <section className="usecases">
            <h2 style={{ fontSize: '1.5em', marginBottom: 36 }}>WARNING: WhatsApp Anyone is NOT for those..</h2>
            <MultiCards content={[
              {
                title: "",
                content: ".. who remembers to delete contacts after sending one-off WhatApp",
              },
              {
                title: "",
                content: ".. who enjoys saving numbers like it's your hobby",
              },
              {
                title: "",
                content: ".. who wants to WhatsApp their employee on holidays",
              },
              {
                title: "",
                content: ".. who'd rather send smoke signals than use WhatsApp",
              }
            ]} />
          </section>
        </div>

        <div style={{ height: 64 }}></div>
        <footer className='fold no-minimum'>
          <div style={{ marginLeft: -20, marginRight: -20 }}>Built with ❤️ to save you some hassle</div>
          <div className='mentions'>
            Developed & maintained by <a href="https://pgxplorer.dev">Pratik&nbsp;Gadhiya</a>
            <br />
            with initial designs from <a href="https://twitter.com/nzeus_nisarg610">Nisarg&nbsp;Rajpura</a>
          </div>
        </footer>
      </Layout >
    </>
  );
}

export default HomePage;