import * as React from 'react';
import styles from './singlePage.module.css';
import { Spacer } from '@/components/Spacer/Spacer';
import Image, { ImageProps } from 'next/image';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import Comments from '@/components/Comments/Comments';
import { formatDate } from '@/utility/utils';

import { getAllPostSlugs, getPost } from '@/lib/posts';
import { TPost } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc'


type TSinglePostProps = {
  params: { [key: string]: string | string[] | undefined };
}

const getSinglePost = (slug: string) => {
  const post: TPost = getPost(slug);
  return post;
}

export async function generateStaticParams() {
  const postIds = getAllPostSlugs();
  const paths = postIds.map((id) => ({ slug: id }));
  return paths;
}

// export async function generateMetadata({ params }) {
//   let post = await getSinglePost(params.slug as string);
//   if (!post) {
//     return
//   }

//   const {title, date, description, mainImage} = post;
//   let ogImage = mainImage ? mainImage : `${baseUrl}/og?title=${encodeURIComponent(title)}`

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'article',
//       publishedTime,
//       url: `${baseUrl}/posts/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

export default async function SinglePage(props: TSinglePostProps) {
  const post = getSinglePost(props.params.slug as string);
  return (
    <div className={styles.container}>
      <Spacer />
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/my-image.jpeg" alt="" layout="fill" className={styles.userImage} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Konstantin Fukszon</span>
              <span className={styles.postDate}>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={post.image} alt="" layout="fill" className={styles.image} />
        </div>
      </div>
      <Spacer />
      <div className={styles.content}>
        <div className={styles.post}>
          <article className="font-normal prose text-md prose-no-quotes prose-blockquote:text-accent text-foreground prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-foreground prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-accent" >
            <MDXRemote source={post.content} />
          </article>
          <Spacer />
          {/* <Comments postslug={post.slug} /> */}
        </div>
        <div className={styles.rightMenu}>
          <Menu />
          <Spacer />
          {/* <MenuCategories /> */}
        </div>
      </div>
    </div>
  );
}

