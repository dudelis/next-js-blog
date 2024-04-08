import * as React from 'react';
import styles from './menu.module.css';
import formatDate from '@/utility/date';
import Link from 'next/link';
import Image from 'next/image';

export interface IMenuProps {
}

export type TMenuItem = {
  category: string;
  title: string;
  publishedDate: string;
  link: string;
}

const items: TMenuItem[] = [
  {
    category: "Power Platform",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    publishedDate: formatDate(new Date()),
    link: "powerplatform"
  },
  {
    category: "DevOps",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    publishedDate: formatDate(new Date()),
    link: "devops"
  },
  {
    category: "Next JS",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    publishedDate: formatDate(new Date()),
    link: "/nextjs"
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
              <span></span>
              <h3>Lorem ipsum dolor sit amet consectetur</h3>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}

