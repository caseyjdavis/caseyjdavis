import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDirectory = path.join(__dirname, "../content/posts");
const outputFile = path.join(__dirname, "../lib/posts-data.ts");

function generatePostsData() {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        content: content || "",
      };
    });

  const output = `// Auto-generated file - do not edit manually
// Generated at build time from content/posts/*.md

import type { Post } from "./blog";

export const posts: Post[] = ${JSON.stringify(posts, null, 2)};
`;

  fs.writeFileSync(outputFile, output, "utf8");
  console.log(`✓ Generated ${posts.length} posts to lib/posts-data.ts`);
}

generatePostsData();
