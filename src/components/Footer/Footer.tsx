import * as React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';
import Link from 'next/link';

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logoConainer}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <div className={styles.logoText}>Dudelis Dev Blog</div>
        </div>
        <div className={styles.footerContent}>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora sapiente maiores inventore laboriosam culpa, suscipit necessitatibus culpa, magni amet deleniti ea laborum!</p>
          <div className={styles.icons}>
            <Image src="/facebook.png" alt="facebook logo" width={24} height={24} />
            <Image src="/youtube.png" alt="youtube logo" width={24} height={24} />
            <Image src="/linkedin.png" alt="linkedin logo" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/blog">About</Link>
          <Link href="/About">Contacts</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Power Platfrom</Link>
          <Link href="/">DevOps</Link>
          <Link href="/">NextJS</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Github</Link>
          <Link href="/">Facebook</Link>
        </div>
      </div>
    </footer>

  );
}

