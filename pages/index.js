import Head from 'next/head';
import Layout from '../components/Layout';
import Form from '../components/Form';

const App = () => (
  <>
    <Head>
      <title>Whatsapp unsaved contact</title>
    </Head>
    <Layout>

      <h1 className="display-5">WhatsApp unsaved contact</h1>
      <p className="lead">No hassle. Send whatsapp to anyone without saving number.</p>

      <Form />
    </Layout>
  </>
);

export default App;