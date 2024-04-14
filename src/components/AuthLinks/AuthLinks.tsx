"use client"
import * as React from 'react';
import styles from './authlinks.module.css'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export interface IAuthLinksProps {
  style: string;
}

export default function AuthLinks(props: IAuthLinksProps) {
  const {status} = useSession();
  return <>
    {status === "authenticated" ? (
      <>
        <Link className={props.style} href="/write">Write</Link>
        <span className={`${props.style} ${styles.logoutButton}`} onClick={()=>signOut()}>Logout</span>
      </>
    ) : (
      <Link className={props.style} href="/login">Login</Link>
    )
    }
  </>

}

