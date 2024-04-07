import * as React from 'react';
import styles from './footer.module.css'

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <div className={styles.container}>
      Footer
    </div>
  );
}

