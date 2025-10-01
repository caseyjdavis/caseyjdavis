export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Posts are loaded at build time via the generated posts file
let cachedPosts: Post[] | null = null;

async function loadPosts(): Promise<Post[]> {
  if (cachedPosts) return cachedPosts;

  try {
    // Dynamic import for build-time generated posts
    const { posts } = await import("./posts-data");
    cachedPosts = posts;
    return posts;
  } catch {
    // Return empty array if posts file doesn't exist yet
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await loadPosts();
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await loadPosts();
  return posts.find((post) => post.slug === slug) || null;
}