"use client"
import * as React from 'react';
import styles from './themetoggle.module.css';
import Image from 'next/image';
import { useTheme } from "next-themes"
import { cn } from '@/lib/utils';


export interface IThemeToggleProps {
}

export default function ThemeToggle(props: IThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const themeToggle = () => theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <div className={
      cn("h-5 w-9 cursor-pointer rounded-[2.5rem] flex bg-foreground items-center justify-between relative")} onClick={themeToggle}>
      <Image src="/moon.png" alt="Moon icon" width={14} height={14} />
      <div
        className={cn(
          "w-4 h-4 rounded-full absolute top-1/2",
          "transform -translate-y-1/2 transition ease-in-out duration-300",
          "bg-background",
          {"left-[1px]": theme !== "dark"},
          {"right-[1px]": theme === "dark" }
          )}>
      </div>
      <Image src="/sun.png" alt="Moon icon" width={14} height={14} />
    </div>
  );
}

