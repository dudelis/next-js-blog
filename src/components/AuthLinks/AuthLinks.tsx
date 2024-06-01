"use client"
import * as React from 'react';
import styles from './authlinks.module.css'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';

export interface IAuthLinksProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}

export default function AuthLinks(props: IAuthLinksProps) {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated"
        ? <span className={cn(
          props.open ? "block" : "hidden sm:block",
          "cursor-pointer text-foreground bg-accent py-1 px-2"        
        )} onClick={() => signOut()}>Logout</span >
        : <Link className={cn(props.open ? "block": "hidden sm:block")} href="/login" onClick={()=> props.setOpen(false)}>Login</Link>
      }
    </>
  ) 
}

