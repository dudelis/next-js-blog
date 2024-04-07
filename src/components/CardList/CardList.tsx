import * as React from 'react';
import styles from './cardlist.module.css'
import Pagination from '../Pagination/Pagination';

export interface ICardListProps {
}

export default function CardList (props: ICardListProps) {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
}

