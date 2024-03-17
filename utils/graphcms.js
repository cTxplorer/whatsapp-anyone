async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(process.env.CMS_LINK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CMS_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPosts(projectTag = 'wa_anyone') {
  const data = await fetchAPI(`
    query AllPosts {
      posts(where: {project_contains_some: ${projectTag}}) {
        slug
        title
        excerpt
      }
    }
  `);
  return data.posts;
}

export async function getPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug {
      post(where: {slug: "${slug}"}) {
        content {
          html
        }
        slug
        title
        seoOverride {
          title
          description
        }
      }
    }
    `
  );
  return data.post;
}
