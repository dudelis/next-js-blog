import * as React from 'react';
import styles from './featured.module.css'
import Image from 'next/image';

export interface IFeaturedProps {
}

export default function Featured(props: IFeaturedProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
          <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repellendus nisi eos harum fuga enim at ea consectetur recusandae. Minus praesentium unde porro dolores. Dolorem libero officiis aut ipsum ab?</p>
          <button className={styles.readMoreButton}>Read More</button>
        </div>
      </div>
    </div>
  );
}

