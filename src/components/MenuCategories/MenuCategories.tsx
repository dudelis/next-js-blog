import * as React from 'react';
import styles from './menucategories.module.css';
import {formatDate} from '@/utility/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Spacer } from '../Spacer/Spacer';

export interface IMenuCategoriesProps {
}

export type TMenuCategoriesItem = {
  category: string;
  categoryColor: string;
  link: string;
}

const items: TMenuCategoriesItem[] = [
  {
    category: "Power Platform",
    categoryColor: "lightgrey",
    link: "/powerplatform",
  },
  {
    category: "DevOps",
    categoryColor: "lightblue",
    link: "/devops",
  },
  {
    category: "Next JS",
    categoryColor: "lightgreen",
    link: "/nextjs"
  }
]

export default function MenuCategories (props: IMenuCategoriesProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.items}>
        {items.map((item, index)=> (
          <Link style={{background: item.categoryColor}} href={item.link} key={index} className={styles.item}>{item.category}</Link>
        ))}
      </div>
      
    </div>
  );
}


