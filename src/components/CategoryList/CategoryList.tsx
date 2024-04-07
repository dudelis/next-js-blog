import * as React from 'react';
import styles from './categorylist.module.css'

export interface ICategoryListProps {
}

export default function CategoryList (props: ICategoryListProps) {
  return (
    <div className={styles.container}>
      CategoryList
    </div>
  );
}

