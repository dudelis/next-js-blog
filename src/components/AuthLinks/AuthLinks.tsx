"use client"
import * as React from 'react';
import styles from './authlinks.module.css'
import Link from 'next/link';

export interface IAuthLinksProps {
  style: string;
}

export default function AuthLinks(props: IAuthLinksProps) {
  const authenticated = true;
  return <>
    {authenticated ? (
      <>
        <Link className={props.style} href="/write">Write</Link>
        <span className={props.style}>Logout</span>
      </>
    ) : (
      <Link className={props.style} href="/login">Login</Link>
    )
    }
  </>

}

