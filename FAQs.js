import Link from 'next/link';

export const faqs = [
  {
    q: <>How to WhatsApp without saving number?</>,
    a: <ol style={{padding: 0}}>
      To WhatsApp without saving the number, follow these steps
      <li style={{ marginLeft: 24 }}>Open this tool</li>
      <li style={{ marginLeft: 24 }}>Enter the recipient's contact number</li>
      <li style={{ marginLeft: 24 }}>Tap "Open WhatsApp Chat" button</li>
      <li style={{ marginLeft: 24 }}>Send WhatsApp as you normally do</li>
    </ol>
  },
  {
    q: <>How to make a call on WhatsApp without saving contact?</>,
    a: <>
      <p>Using this tool, you will be able to open WhatsApp chat window without saving number. You will be able to call the recipient from WA chat screen.</p>
      <ol style={{padding: 0}}>
        Follow these steps to call unknown number -
        <li style={{ marginLeft: 24 }}>Open this tool</li>
        <li style={{ marginLeft: 24 }}>Enter the recipient's contact number</li>
        <li style={{ marginLeft: 24 }}>Tap "Open WhatsApp Chat" button</li>
        <li style={{ marginLeft: 24 }}>Call on WhatsApp as you normally do</li>
      </ol>
    </>
  },
  {
    q: <>What if this page saves my contacts?</>,
    a: <>
      <p>Thanks for asking. While there is no perfect way for any creator to assure their users that their service is 100% secure, I will try my best to answer your concern..</p>
      <p><em>No, this tool does not save any personal data.</em></p>
      <p>The only thing that the web app collects is analytics data (page visits, clicks) via Google Analytics and PostHog. Since contact number is not appended to URL before redirecting, analytics wouldn't collect number with url.So no personally identifiable, private data is shared or saved.</p>

      <p><strong>How do you assure your user that you don't save contacts?</strong></p>
      <p>Again, I wish there was a way I could give full assurance that I don't collect private data. Except for checking the web app security by yourself, every time before entering the contact number, you will have to take my word on this and trust me.</p>
      <p>As a step towards being open, I have <strong><a href="https://github.com/cTxplorer/whatsapp-anyone">open-sourced code on github</a></strong>.</p>
      <p>But then, the code deployed on the website can be something else. You will either have to trust this web app (or any website on the internet for this matter) or build yourself from scratch.</p>
      <p>At last, I can hire a cybersecurity agency to audit the website, but then you will have to trust the agency :D</p>
    </>
  },
  {
    q: <>How does this tool work?</>,
    a: <>
    <p>WhatsApp has an unpopular way to open chat conversation with unsaved contact number - wa.me link.</p>
    <p>You can create a special wa.me link (https://wa.me/COUNTRYCODE+PHONE) and open it in browser.</p>
    <p>WhatsApp Anyone use the same mechanism, but while offering you added convenience! It's simple, secure & installable website.</p>
    </>
  },
  {
    q: <>Does the tool support WhatsApp Web?</>,
    a: <>Yes, WhatsApp Anyone also supports WhatsApp Web to send message or call unsaved number. Based on whether WhatsApp app is installed, you will either be redirected to WA app or WA web.</>
  },
  {
    q: <>Do you have any how-to guides?</>,
    a: <>Read our <Link href="/guides">how-to guides to increase WhatsApp productivity</Link></>
  },
  {
    q: <>Does WhatsApp Anyone have Android and iOS app?</>,
    a: <>WhatsApp Anyone is a Progressive Web App that can be installed on your home screen. Most browsers, and operating systems are supported - Android, iOS, Windows, MacOS, Linux. <a href="#a2hs-anchor">Add to Home Screen</a></>
  },
]