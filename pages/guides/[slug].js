import Head from 'next/head';
import Link from 'next/link';
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from '../../utils/graphcms';

export default function Post({ post, allPosts }) {
  console.log({post})
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
        <h3>{post.title}</h3>
        <div className="content">
          {post.content?.html ? (
            <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
          ) : <>loading..</>
          }
        </div>

        <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid grey' }}>
          Liked this guide? Check <Link href="/guides">more how-to guides to increase WhatsApp productivity</Link>
        </div>
        {allPosts?.length ? <div>
          <ul>
            Other guides:
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
  console.log({ slug: params.slug });
  const [post, allPosts] = await Promise.all([getPostBySlug(params.slug), getAllPosts()]);
  console.log({ post, allPosts });
  return {
    props: {
      post,
      allPosts: allPosts.filter(post => post.slug !== params.slug),
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  console.log({ posts })
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
