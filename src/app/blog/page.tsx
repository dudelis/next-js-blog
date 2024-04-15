import CardList from '@/components/CardList/CardList';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import { Spacer } from '@/components/Spacer/Spacer';
import React from 'react';
import styles from './blogpage.module.css';

export type TBlogPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
}

const BlogPage: React.FC<TBlogPageProps> = ({searchParams}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const category = searchParams.category ? searchParams.category as string : '';
  return (
    <div className={styles.container}>
      <Spacer />
      <h1 className={styles.title}>Category Blog</h1>
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <CardList page={page} />
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