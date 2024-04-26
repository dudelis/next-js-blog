"use client"
import * as React from 'react';
import Link from 'next/link';
import AuthLinks from '../AuthLinks/AuthLinks';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { cn } from '@/lib/utils';

export interface INavLinksProps {
}

export default function NavLinks(props: INavLinksProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex gap-2 text-xs flex-[2] justify-end items-center 
      lg:gap-3 lg:text-sm 
      xl:gap-4 xl:text-base ">
      <ThemeToggle />
      <Link className="hidden sm:block" href="/">Home</Link>
      <Link className="hidden sm:block" href="/contacts">Contacts</Link>
      <Link className="hidden sm:block" href="/about">About</Link>
      <AuthLinks />
      <div className="relative flex flex-col justify-between w-5 h-4 bg-transparent border-none cursor-pointer sm:hidden" onClick={() => setOpen(!open)}>
        <span className={cn(
          "bg-foreground h-[0.1rem] w-full transition ease-in-out duration-300",
          {"rotate-45 translate-x-[5px] translate-y-[7px]": open})}></span>
        <span className={cn(
          "bg-foreground h-[0.1rem] w-full transition ease-in-out duration-300",
          {"opacity-0": open})}></span>
        <span className={cn(
          "bg-foreground h-[0.1rem] w-full transition ease-in-out duration-300",
          {"-rotate-45 translate-x-[5px] translate-y-[-8px]": open})}></span>
      </div>
      {open && (
        <div className="
        absolute top-20 left-0 bg-background w-full h-[calc(100vh-5rem)] 
        flex flex-col items-center justify-center gap-8 text-2xl font-bold z-50
        ">
          <Link href="/">Home</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href="/about">About</Link>
          <AuthLinks style="" />
        </div>
      )}
    </div>

  );
}

