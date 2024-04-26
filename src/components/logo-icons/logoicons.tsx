import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ILogoIconsProps {
}

export function LogoIcons(props: ILogoIconsProps) {
  return (
    <>
      <Link href="https://github.com/dudelis/" target='_blank'>
        <Image className="rounded-full" src="/logos/github.png" alt="GitHub logo" width={24} height={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/konstantin-fukszon-51b19a31/" target='_blank'>
        <Image className="rounded-full" src="/logos/linkedin.png" alt="linkedin logo" width={24} height={24} />
      </Link>
      <Link href="https://youtube.com/@drunk_musician" target='_blank'>
        <Image className="rounded-full" src="/logos/youtube.png" alt="youtube logo" width={24} height={24} />
      </Link>
      <Link href="https://instagram.com/dudelis" target='_blank'>
        <Image className="rounded-full" src="/logos/instagram.png" alt="youtube logo" width={24} height={24} />
      </Link>
      <Link href="https://www.facebook.com/konstantin.fukszon.7/" target='_blank'>
        <Image className="rounded-full" src="/logos/facebook.png" alt="facebook logo" width={24} height={24} />
      </Link>
    </>
  );
}
