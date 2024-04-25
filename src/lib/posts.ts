import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { TPost } from '@/@types/post';

const postsDirectory = path.join(process.cwd(), 'src\\posts');

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    slug,
    ...matterResult.data,
    content: matterResult.content,
  } as TPost;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  return slugs;
}

export function getFeaturedPost(){
  const allPosts = getSortedPostsData();
  return allPosts.find((post) => post.featured === true);
}

export function getAllCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  const categories = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return matterResult.data.category as string;
  });
  return categories;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      content: matterResult.content,
      ...matterResult.data,
    } as TPost;
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