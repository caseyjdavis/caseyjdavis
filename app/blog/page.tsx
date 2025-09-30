import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Insights, tutorials, and thoughts on technology consulting
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}