import * as React from 'react';
import type { GetStaticPaths, GetStaticPathsResult } from 'next'
import ReactMarkdown from "react-markdown"
import styles from './singlePage.module.css';
import { Spacer } from '@/components/Spacer/Spacer';
import Image from 'next/image';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import Comments from '@/components/Comments/Comments';
import { formatDate } from '@/utility/utils';

import { getAllPostIds, getPostData } from '@/lib/posts';
import { TPost } from '@/@types/post';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote/rsc'

type TSinglePostProps = {
  params: { [key: string]: string | string[] | undefined };
}
interface IParams extends ParsedUrlQuery {
  slug: string
}

const getSinglePost = async (slug: string) => {
  const post: TPost = await getPostData(slug);
  return post;
}

export async function generateStaticParams() {
  const postIds = getAllPostIds();
  const paths = postIds.map((id) => ({slug: id}));
  return paths;
}

export default async function SinglePage(props: TSinglePostProps) {
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
      <div className={styles.content}>
        <div className={styles.post}>
          <div className="font-light prose text-md prose-no-quotes prose-blockquote:text-accent text-foreground prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-foreground prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-accent" >
            <MDXRemote source={post.content} />
            {/* <ReactMarkdown>
              {post.content}
            </ReactMarkdown> */}
          </div>
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

