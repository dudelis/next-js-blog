import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoIcons } from '../logo-icons/logoicons';

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 py-8 md:gap-2 md:flex-row text-primary-foreground">
      <div className="flex flex-[3] flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image src="/codemusicianlogo.png" alt="logo" width={100} height={100} />
          <div className="text-2xl font-medium">Code Musician Blog</div>
        </div>
        <div>
          <p className="text-xs font-light">
            Welcome to Code Musician Blog, where ones and zeros dance with melodies, and binary harmonizes with beats!
            Strum along with me as we explore the intersection of music and tech. From “How to Tune Your Guitar (and Your Wi-Fi)” to “APIs in A Minor,” we’ll hit all the right notes. And if you’ve ever wondered what a software engineer’s favorite chord is, it’s definitely “C# Major” (because it’s sharp).
          </p>
          <div className="flex gap-2 mt-4">
            <LogoIcons />
          </div>
        </div>
      </div>
      <div className="flex-[1] flex gap-20 justify-end">
        <div className="flex flex-col justify-between w-full gap-2 font-light text-center md:text-start md:w-auto">
          <span className="text-[1rem] font-bold text-foreground">Links</span>
          <Link href="/">Home</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}

