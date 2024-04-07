"use client"
import * as React from 'react';
import styles from './themetoggle.module.css';
import Image from 'next/image';
import { IThemeContext, ThemeContext } from '@/context/ThemeContext';

export interface IThemeToggleProps {
}

export default function ThemeToggle(props: IThemeToggleProps) {

  const { theme, toggle } = React.useContext(ThemeContext) as IThemeContext;
  return (
    <div className={styles.container} onClick={toggle} style={
      theme === "light" ? { background: "#0f172a" } : { background: "white" }
    }>
      <Image src="/moon.png" alt="Moon icon" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === "light" ?
          { left: 1, background: "white" } : { right: 1, background: "#0f172a" }}></div>
      <Image src="/sun.png" alt="Moon icon" width={14} height={14} />
    </div>
  );
}

