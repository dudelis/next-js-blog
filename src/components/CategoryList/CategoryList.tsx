import * as React from 'react';
import styles from './categorylist.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { Spacer } from '../Spacer/Spacer';
import { Category } from '@prisma/client';


export type TCategoryListProps = {}

const getData = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {cache: "no-store"});
  return response.json();
}

const CategoryList = async (props: TCategoryListProps) => {
  const data: Category[] = await getData();
  return (
    <div className={styles.container}>
      <Spacer/>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {data.map((item, index) => (
          <Link key={item.id} href={`/blog?cat=${item.slug.toLowerCase()}`}
            className={styles.category} 
            style={{ background: item.color as string }}
          >
            <Image src={item.img as string} alt="" width={32} height={32} className={styles.image} />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;

