import * as React from 'react';
import styles from './singlePage.module.css';
import { Spacer } from '@/components/Spacer/Spacer';
import Image from 'next/image';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';

export interface ISinglePageProps {
}

export function SinglePage(props: ISinglePageProps) {
  return (
    <div className={styles.container}>
      <Spacer />
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>TO BE PULLED UP DYNAMICALLY</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" layout="fill" className={styles.userImage} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>User Name</span>
              <span className={styles.postDate}>Post Date</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" layout="fill" className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>TO BE PULLED UP DYNAMICALLY</p>
      </div>
      <div className={styles.rightContainer}>
        <Menu />
        <Spacer />
        <MenuCategories />
      </div>
    </div>
  );
}

export default SinglePage
