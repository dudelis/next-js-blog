import * as React from 'react';
import styles from './login.module.css';

export interface ILoginPageProps {
}

function LoginPage (props: ILoginPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with GitHub</div>
        <div className={styles.socialButton}>Sign in with Microsoft</div>
      </div>
    </div>
  );
}

export default LoginPage;
