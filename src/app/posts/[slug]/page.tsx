import * as React from 'react';
import type { GetStaticPaths } from 'next'
import ReactMarkdown from "react-markdown"
import styles from './singlePage.module.css';
import { Spacer } from '@/components/Spacer/Spacer';
import Image from 'next/image';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import Comments from '@/components/Comments/Comments';
import { formatDate } from '@/utility/utils';
import Content from '@/components/Content/content';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { TPost } from '@/@types/post';
import { ParsedUrlQuery } from 'querystring';



export type TSinglePostProps = {
  params: { [key: string]: string | string[] | undefined };
  post: TPost;
}
export interface IParams extends ParsedUrlQuery {
  slug: string
}
// export type PostWithCategory = Prisma.PostGetPayload<{
//   include: { category: true, user: true }
// }>

// const getPost = async (slug: string) => {
//   const response = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, { cache: "no-store" });
//   return response.json();
// }

async function SinglePage(props: TSinglePostProps) {
  console.log(props);
  const post = await getSinglePost(props.params.slug as string);
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
          <Image src={post.mainImage} alt="" layout="fill" className={styles.image} />
        </div>
      </div>
      <Spacer />
      <div suppressHydrationWarning className={styles.content}>
        <div className={styles.post}>
          <div className="text-md font-light prose text-foreground" >
          {/* <div className="prose text-foreground"  dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          </div>
          {/* <div className="text-md font-light">
            {typeof window === "undefined" ? "Loading..." :<div className="prose text-foreground"  dangerouslySetInnerHTML={{ __html: post.content }}></div>}
          </div> */}
          <Content content={post.content} />
          <Spacer />
          <div className={styles.tags}>
            {/* <Comments postslug={post.slug} /> */}
          </div>
        </div>
        <div className={styles.rightMenu}>
          {/* <Menu /> */}
          <Spacer />
          {/* <MenuCategories /> */}
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

export const getSinglePost = async (slug: string) => {
  console.log(slug);
  const post: TPost = await getPostData(slug);
  return post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = getAllPostIds();
  const paths = postIds.map((path) => ({
    params: { slug: path }
  }));
  return {
    paths,
    fallback: false
  }
}
