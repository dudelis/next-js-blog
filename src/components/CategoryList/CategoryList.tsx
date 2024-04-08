import * as React from 'react';
import styles from './categorylist.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { Spacer } from '../Spacer/Spacer';

export type TCategory = {
  name: string,
  color: string,
  imageUrl: string
}
export type TCategoryListProps = {}
//TODO: add the external DB for loading the data.
const categories: TCategory[] = [

  {
    name: "Power Platform",
    color: "pink",
    imageUrl: "/style.png"
  },
  {
    name: "Next JS",
    color: "grey",
    imageUrl: "/fashion.png"
  },
  {
    name: "DevOps",
    color: "blue",
    imageUrl: "/food.png"
  }
]

export default function CategoryList(props: TCategoryListProps) {
  return (
    <div className={styles.container}>
      <Spacer/>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {categories.map((item, index) => (
          <Link key={index} href={`/blog?cat=${item.name.toLowerCase()}`}
            className={`${styles.category} ${styles[item.name.toLocaleLowerCase()]}`}
            style={{ background: item.color }}
          >
            <Image src={item.imageUrl} alt="" width={32} height={32} className={styles.image} />
            {item.name}
          </Link>
        ))}

      </div>
    </div>
  );
}

