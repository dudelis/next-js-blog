import * as React from 'react';
import styles from './singlePage.module.css';
import { Spacer } from '@/components/Spacer/Spacer';
import Image from 'next/image';
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import Comments from '@/components/Comments/Comments';

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
      <Spacer />
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dolorum veniam. Odio voluptate quaerat, doloribus hic nihil repellat aliquid veritatis magnam quae neque tempora quo sint animi. Distinctio, libero facere!
            </p>
            <h3>Some header</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dolorum veniam. Odio voluptate quaerat, doloribus hic nihil repellat aliquid veritatis magnam quae neque tempora quo sint animi. Distinctio, libero facere!
            </p>
            <h3>Some header</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dolorum veniam. Odio voluptate quaerat, doloribus hic nihil repellat aliquid veritatis magnam quae neque tempora quo sint animi. Distinctio, libero facere!
            </p>
            <h3>Some header</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dolorum veniam. Odio voluptate quaerat, doloribus hic nihil repellat aliquid veritatis magnam quae neque tempora quo sint animi. Distinctio, libero facere!
            </p>
            <h3>Some header</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <Spacer />
          <div className={styles.tags}>
          <Comments />
          </div>          
        </div>
        <div className={styles.rightMenu}>
          <Menu />
          <Spacer />
          <MenuCategories />
        </div>
      </div>
    </div>
  );
}

export default SinglePage
