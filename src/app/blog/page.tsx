import CardList from '@/components/CardList/CardList';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import { Spacer } from '@/components/Spacer/Spacer';
import React from 'react';
import styles from './blogpage.module.css';

const BlogPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Spacer />
      <h1 className={styles.title}>TO BE PULLED UP DYNAMICALLY</h1>
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <CardList />
        </div>
        <div className={styles.rightContainer}>
          <Menu />
          <Spacer />
          <MenuCategories />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;