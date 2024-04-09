import * as React from 'react';
import styles from './menu.module.css';
import formatDate from '@/utility/date';
import Link from 'next/link';
import Image from 'next/image';

export interface IMenuProps {
}

export type TMenuItem = {
  category: string;
  categoryColor: string;
  title: string;
  publishedDate: string;
  link: string;
  user: string;
}

const items: TMenuItem[] = [
  {
    category: "Power Platform",
    categoryColor: "lightgrey",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    publishedDate: formatDate(new Date()),
    link: "powerplatform",
    user: "Darth Sidious"
  },
  {
    category: "DevOps",
    categoryColor: "lightblue",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    publishedDate: formatDate(new Date()),
    link: "devops",
    user: "Darth Sidious"
  },
  {
    category: "Next JS",
    categoryColor: "lightgreen",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    publishedDate: formatDate(new Date()),
    link: "/nextjs",
    user: "Darth Sidious"
  }
]

export default function Menu (props: IMenuProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Most popular</h2>
      <div className={styles.items}>
        {items.map((item, index)=> (
          <Link href={item.link} key={index} className={styles.item}>
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
              <span className={styles.category} style={{backgroundColor: item.categoryColor}}>{item.category}</span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{item.user}</span>
                <span className={styles.date}> - {item.publishedDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}


