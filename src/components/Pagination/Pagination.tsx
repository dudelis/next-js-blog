import * as React from 'react';
import styles from './pagination.module.css'
import Link from 'next/link';

export interface IPaginationProps {
  page: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function Pagination({page, hasNext, hasPrevious}: IPaginationProps) {
  return (
    <div className={styles.container}>
      <Link href={`?page=${page - 1}`} scroll={false}>
        <button disabled={!hasPrevious} className={styles.button}>Previous</button>
      </Link>
      <Link href={`?page=${page + 1}`} scroll={false}>
        <button disabled={!hasNext} className={styles.button}>Next</button>
      </Link>
    </div>
  );
}

