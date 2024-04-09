import * as React from 'react';
import styles from './pagination.module.css'

export interface IPaginationProps {
}

export default function Pagination (props: IPaginationProps) {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  );
}

