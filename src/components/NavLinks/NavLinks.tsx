"use client"
import * as React from 'react';
import styles from './navlinks.module.css';
import Link from 'next/link';
import AuthLinks from '../AuthLinks/AuthLinks';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export interface INavLinksProps {
}

export default function NavLinks(props: INavLinksProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.links}>
      <ThemeToggle />
      <Link className={styles.link} href="/">Homepage</Link>
      <Link className={styles.link} href="/contacts">Contacts</Link>
      <Link className={styles.link} href="/about">About</Link>
      <AuthLinks style={styles.link}  />
      <div className={open ? styles.burgerActive : styles.burger } onClick={()=> setOpen(!open)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href="/about">About</Link>
          <AuthLinks style="" />
        </div>
      )}
    </div>

  );
}

