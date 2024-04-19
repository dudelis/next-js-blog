import * as React from 'react';
import styles from './singlePage.module.css';
import { Spacer } from '@/components/Spacer/Spacer';
import Image from 'next/image';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import Comments from '@/components/Comments/Comments';
import { Prisma } from '@prisma/client';
import formatDate from '@/utility/date';

export type TSinglePostProps = {
  searchParams: { [key: string]: string | string[] | undefined };
}
export type PostWithCategory = Prisma.PostGetPayload<{
  include: { category: true, user: true }
}>

const getPost = async (slug: string) => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, { cache: "no-store" });
  return response.json();
}

async function SinglePage({ params }: { params: { slug: string } }) {
  const post: PostWithCategory = await getPost(params.slug);
  return (
    <div className={styles.container}>
      <Spacer />
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={typeof post.user?.image === "undefined" ? post.user.image : "/empty user.png"} alt="" layout="fill" className={styles.userImage} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>{post.user.name}</span>
              <span className={styles.postDate}>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={post.img as string} alt="" layout="fill" className={styles.image} />
        </div>
      </div>
      <Spacer />
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
          </div>
          <Spacer />
          <div className={styles.tags}>
            <Comments postslug={params.slug} />
          </div>
        </div>
        <div className={styles.rightMenu}>
          <Menu />
          <Spacer />
          <MenuCategories />
        </div>
      </div>
    </div>
  );
}

export default SinglePage
