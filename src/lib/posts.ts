import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type TPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: Date;
  tags: string[];
  category: string;
  featured: boolean;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const tags = matterResult.data.tags
    ?.split(",")
    .map((tag: string) => tag.trim());
  return {
    slug,
    tags,
    ...matterResult.data,
    content: matterResult.content,
  } as TPost;
}

export function getPosts() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, "");
    return getPost(slug);
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return slugs;
}

export function getFeaturedPost() {
  const allPosts = getPosts();
  return allPosts.find((post) => post.featured === true);
}

export function getUniqueTags() {
  const fileNames = fs.readdirSync(postsDirectory);
  const tags: string[] = [];
  fileNames.forEach((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const postTags = matterResult.data.tags
      ?.split(",")
      .map((tag: string) => tag.trim());
    tags.push(...postTags);
  });
  
  return Array.from(new Set(tags));
}

export function getFilteredPosts(page: number, category?: string) {
  const posts = getPosts();
  const count = posts.length;
  const POST_PER_PAGE = 3;
  const skip = (page - 1) * POST_PER_PAGE;
  const filteredPosts = posts.filter((post) => {
    return post.category === category;
  });

  return {
    posts: filteredPosts.slice(skip, skip + POST_PER_PAGE),
    count: count,
  };
}
