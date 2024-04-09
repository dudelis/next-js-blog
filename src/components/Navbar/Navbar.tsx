import * as React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AuthLinks from '../AuthLinks/AuthLinks';
import NavLinks from '../NavLinks/NavLinks';

export interface INavbarProps {
}

export default function Navbar(props: INavbarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook logo" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube logo" width={24} height={24} />
        <Image src="/linkedin.png" alt="linkedin logo" width={24} height={24} />
      </div>
      <Link href="/">
        <div className={styles.logo}>
          Dudelis Dev Blog
        </div>
      </Link>
      <NavLinks />
    </div>    
  );
}

