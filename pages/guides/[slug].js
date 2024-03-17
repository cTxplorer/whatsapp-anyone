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
      <header style={{ transform: 'scale(0.5)' }}>
        <img src="/icons/icon.svg" className="logo" alt="" />
        <h1 className="title"><Link href="/">WhatsApp Anyone</Link></h1>
      </header>
      <main style={{ maxWidth: 600, margin: '0 auto' }}>
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
                <li>
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
