import * as React from 'react';
import styles from './menu.module.css';
import {formatDate} from '@/utility/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@prisma/client';

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

const getData = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
  return response.json();
}

export default async function Menu (props: IMenuProps) {
  const categories: Category[] = await getData();
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
              <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h4>
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


