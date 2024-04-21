import * as React from 'react';
import Image from 'next/image';
import { Post } from '@prisma/client';
import { get } from 'http';
import { stripHtml } from '@/utility/utils';
import Link from 'next/link';

export interface IFeaturedProps {
}

const getFeaturedPost = async (): Promise<Post> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/featured`);
  const post = await res.json();
  return post;
}

export default async function Featured(props: IFeaturedProps) {
  const post = await getFeaturedPost();
  return (
    <section className="mt-8 md:mt-12 flex gap-8 justify-between items-center">
        <div className="hidden lg:flex relative h-96 flex-[1]">
          <Image src={post.img ? post.img : ""} alt="" fill className="object-cover"/>
        </div>
        <div className="flex-[1] flex flex-col gap-4 text-foreground">
          <h2 className="text-xl md:text-2xl lg:text-3xl">{post.title}g</h2>
          <p className="text-sm md:text-base font-light">{stripHtml(post.content).substring(0,250)}...</p>
          <Link href={`/posts/${post.slug}` } className="py-4 px-6 w-max bg-accent text-background">Read More</Link>
        </div>
    </section>
  );
}

