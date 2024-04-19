import * as React from 'react';
import styles from './cardlist.module.css'
import Pagination from '../Pagination/Pagination';
import Image from 'next/image';
import formatDate from '@/utility/date';
import Link from 'next/link';
import { Post } from '@prisma/client';
import { Prisma } from '@prisma/client'

export interface ICardListProps {
  page: number;
  category?: string; 
}

export type PostWithCategory = Prisma.PostGetPayload<{
  include: { category: true }
}>

const getData = async (page: number, category: string) => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${category || ""}`, {cache: "no-store"});
  return response.json();
}

const CardList= async ({page, category}: ICardListProps) => {
  const {posts, count, POST_PER_PAGE}: {posts: PostWithCategory[], count: number, POST_PER_PAGE: number} = await getData(page, category || "" );
  console.log(posts);
  const hasNext = page * POST_PER_PAGE < count;
  const hasPrevious = page-1 > 0;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        {posts && posts.map((item) => (
          <div className={styles.post} key={item.id}>
            <div className={styles.imageContainer}>
              <Image className={styles.image} src={item.img as string} alt={item.title} fill ></Image>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>{formatDate(item.createdAt)} - </span>
                <span className={styles.category}>{item.category.title}</span>
              </div>
              <h3 className={styles.postTitle}>{item.title}</h3>
              <p className={styles.text} dangerouslySetInnerHTML={{__html: `${item.content.substring(0,200)}...`}}></p>
              <Link className={styles.link} href={`/posts/${item.slug}`}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrevious={hasPrevious}  />
    </div>
  );
}

export default CardList;