import Head from 'next/head';
import Link from 'next/link';
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from '../../utils/graphcms';

export default function Post({ post, allPosts }) {
  if (!post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const title = `${ post?.seoOverride?.title || post.title } - WhatsApp Anyone`;
  const description = post?.seoOverride?.description || post.excerpt;
  const websiteUrl = `https://whatsapp-anyone.pgxplorer.dev/guides/${ post.slug }`;

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

      <header style={{ transform: 'scale(0.5)' }}>
        <img src="/icons/icon.svg" className="logo" alt="" />
        <h1 className="title"><Link href="/">WhatsApp Anyone</Link></h1>
      </header>
      <main style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
        <h3>{post.title}</h3>
        <div className="content">
          {post.coverImage ? <img src={post.coverImage.url} alt={post.coverImage.altText || ''} maxWidth={600} width="100%" /> : ''}

          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
          ) : ''}
        </div>

        <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid grey' }}>
          Liked this guide? Check <Link href="/guides">more how-to guides to increase WhatsApp productivity</Link>
        </div>
        {allPosts?.length ? <div style={{ marginTop: 16 }}>
          All guides:
          <ul>
            {
              allPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/guides/${ post.slug }`}>{post.title}</Link>
                  <p style={{ marginTop: 4 }}>{post.excerpt}</p>
                </li>
              ))
            }
          </ul>
        </div> : ''}
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const [post, allPosts] = await Promise.all([getPostBySlug(params.slug), getAllPosts()]);
  return {
    props: {
      post,
      allPosts: allPosts.filter(post => post.slug !== params.slug),
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
