import * as React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { LogoIcons } from '../logo-icons/logoicons';

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="flex justify-between text-primary-foreground py-8 items-center gap-4">
      <div className="flex flex-[1] flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image src="/codemusicianlogo.png" alt="logo" width={100} height={100} />
          <div className={styles.logoText}>Code Musician Blog</div>
        </div>
        <div className={styles.footerContent}>
          <p className={styles.description}>
            Welcome to Code Musician Blog, where ones and zeros dance with melodies, and binary harmonizes with beats!
            Strum along with me as we explore the intersection of music and tech. From “How to Tune Your Guitar (and Your Wi-Fi)” to “APIs in A Minor,” we’ll hit all the right notes. And if you’ve ever wondered what a software engineer’s favorite chord is, it’s definitely “C# Major” (because it’s sharp).
          </p>
          <div className={styles.icons}>
            <LogoIcons />
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

