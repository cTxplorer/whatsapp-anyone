import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../utils/graphcms';

const title = `How-To Guides - WhatsApp Anyone`;
const description = "Increase your WhatsApp productivity with our how-to guides.";
const websiteUrl = `https://whatsapp-anyone.pgxplorer.dev/guides`;


export default function Post({ posts = [] }) {
  return (
    <>
          <Head>
        <link rel="canonical" href={websiteUrl}></link>

        {process.env.BUILD_ENV !== 'production' && <meta name="robots" content="noindex, nofollow" />}

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
      <header style={{ transform: 'scale(0.5)' }}>
        <img src="/icons/icon.svg" className="logo" alt="" />
        <h1 className="title"><Link href="/">WhatsApp Anyone</Link></h1>
      </header>
      <main style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>

        <h3>Our how-to guides on using WhatsApp</h3>
        <div className="content">
          <ul>
            {
              posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/guides/${ post.slug }`}>{post.title}</Link>
                  <p style={{marginTop: 4}}>{post.excerpt}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
