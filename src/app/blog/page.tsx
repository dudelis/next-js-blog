import CardList from '@/components/CardList/CardList';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import { Spacer } from '@/components/Spacer/Spacer';
import React from 'react';
import styles from './blogpage.module.css';
import { Category } from '@prisma/client';

export type TBlogPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
}

const getCategory = async (slug:string) => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/categories/${slug}`, {cache: "no-store"});
  return response.json();
}


const BlogPage: React.FC<TBlogPageProps> = async ({searchParams}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const catSlug  = searchParams.cat ? searchParams.cat as string : '';
  const category: Category = await getCategory(catSlug);
  return (
    <div className={styles.container}>
      <Spacer />
      <h1 className={styles.title} style={{background: category.color as string}}>{category.title}</h1>
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <CardList page={page} category={catSlug} />
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