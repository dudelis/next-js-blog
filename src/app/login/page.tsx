"use client"
import * as React from 'react';
import styles from './login.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export interface ILoginPageProps {
}

function LoginPage (props: ILoginPageProps) {
  const router = useRouter();
  const {data, status} = useSession();
  
  if (status === "loading") return <div className={styles.loading}>Loading...</div>
  if (status === "authenticated") router.push("/");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={()=>signIn("google")}>Sign in with Google</div>
        <div className={styles.socialButton} onClick={()=>signIn("github")}>Sign in with GitHub</div>
        <div className={styles.socialButton} onClick={()=>signIn("azure-ad")}>Sign in with Microsoft</div>
      </div>
    </div>
  );
}

export default LoginPage;
