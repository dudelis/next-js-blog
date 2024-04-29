import * as React from 'react';
import styles from './cardlist.module.css'
import Pagination from '../Pagination/Pagination';
import Image from 'next/image';
import {formatDate} from '@/utility/utils';
import Link from 'next/link';
import { Prisma } from '@prisma/client'
import { getAllPostSlugs, getPost } from '@/lib/posts';
import { TPost } from '@/lib/posts';

export interface ICardListProps {
  page: number;
  category?: string; 
}

const getData = async (page: number, category: string) => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${category || ""}`, {cache: "no-store"});
  return response.json();
}

const CardList= async ({page, category}: ICardListProps) => {
  const {posts, count, POST_PER_PAGE}: {posts: TPost[], count: number, POST_PER_PAGE: number} = await getData(page, category || "" );
  const hasNext = page * POST_PER_PAGE < count;
  const hasPrevious = page-1 > 0;

  return (
    <section className="flex flex-col">
      <h2 className="mb-12 text-xl font-bold md:text-2xl lg:text-3xl">Recent Posts</h2>
      <div className="flex flex-col">
        {posts && posts.map((item) => (
          <div className="flex items-center gap-12 mb-12" key={item.slug}>
            <div className="relative hidden w-2/5 lg:flex h-72">
              <Image className="object-cover" src={item.image as string} alt={item.title} fill ></Image>
            </div>
            <div className="flex flex-col w-full gap-4 lg:w-2/5">
              <div className="self-start text-xs">
                <span className="text-primary-foreground">{formatDate(item.date)} - </span>
                <span className="text-accent">{item.category}</span>
              </div>
              <h3 className="text-lg font-bold md:text-xl lg:text-2xl">{item.title}</h3>
              <div className="text-sm font-light text-primary-foreground" dangerouslySetInnerHTML={{__html: `${item.content.substring(0,200)}...`}}></div>
              <Link className="px-3 py-2 w-max bg-accent text-background hover:bg-background hover:text-accent" href={`/posts/${item.slug}`}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrevious={hasPrevious}  />
    </section>
  );
}

export default CardList;