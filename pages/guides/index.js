import Link from 'next/link';
import { getAllPosts } from '../../utils/graphcms';

export default function Post({ posts = [] }) {
  return (
    <>
      <header style={{ transform: 'scale(0.5)' }}>
        <img src="/icons/icon.svg" className="logo" alt="" />
        <h1 className="title"><Link href="/">WhatsApp Anyone</Link></h1>
      </header>
      <main style={{ maxWidth: 600, margin: '0 auto' }}>

        <h3>Our how-to guides on using WhatsApp</h3>
        <div className="content">
          <ul>
            {
              posts.map((post) => (
                <li>
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
