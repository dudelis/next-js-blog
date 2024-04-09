import * as React from 'react';
import styles from './cardlist.module.css'
import Pagination from '../Pagination/Pagination';
import Image from 'next/image';
import formatDate from '@/utility/date';
import Link from 'next/link';

export interface ICardListProps {
}
export type TPost = {
  id: string;
  title: string;
  description: string;
  category: string;
  publishedDate: string;
  imageUrl: string;
}
const posts: TPost[] = [
  {
    id: "1",
    title: "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cum quibusdam. Aliquid amet quasi nemo incidunt, cumque cupiditate at molestiae officia libero itaque ex nihil, possimus doloribus quod reiciendis deserunt!",
    category: "Power Platform",
    publishedDate: formatDate(new Date()),
    imageUrl: "/p1.jpeg"
  },
  {
    id: "2",
    title: "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cum quibusdam. Aliquid amet quasi nemo incidunt, cumque cupiditate at molestiae officia libero itaque ex nihil, possimus doloribus quod reiciendis deserunt!",
    category: "Power Platform",
    publishedDate: formatDate(new Date()),
    imageUrl: "/p1.jpeg"
  },
  {
    id: "3",
    title: "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cum quibusdam. Aliquid amet quasi nemo incidunt, cumque cupiditate at molestiae officia libero itaque ex nihil, possimus doloribus quod reiciendis deserunt!",
    category: "Power Platform",
    publishedDate: formatDate(new Date()),
    imageUrl: "/p1.jpeg"
  }
]

export default function CardList(props: ICardListProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        {posts.map((item) => (
          <div className={styles.post} key={item.id}>
            <div className={styles.imageContainer}>
              <Image className={styles.image} src={item.imageUrl} alt={item.title} fill ></Image>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>{item.publishedDate} - </span>
                <span className={styles.category}>{item.category}</span>
              </div>
              <h3 className={styles.postTitle}>{item.title}</h3>
              <p className={styles.text}>{item.description}</p>
              <Link className={styles.link} href={`/posts/${item.id}`}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

