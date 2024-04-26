import * as React from 'react';
import Link from 'next/link';
import NavLinks from '../NavLinks/NavLinks';
import { LogoIcons } from '../logo-icons/logoicons';

export interface INavbarProps {
}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="flex justify-between items-center h-20">
      <div className="hidden lg:flex flex-[1] gap-2 ">
        <LogoIcons />        
      </div>
      <Link href="/">
        <div className="flex-[2] text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          Code Musician
        </div>
      </Link>
      <NavLinks />
    </div>    
  );
}

