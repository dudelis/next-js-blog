import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@prisma/client';


export type TCategoryListProps = {}

const getData = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {cache: "no-store"});
  return response.json();
}

const CategoryList = async (props: TCategoryListProps) => {
  const data: Category[] = await getData();
  return (
    <section className="flex flex-col">
      <h2 className="mb-12 text-xl md:text-2xl lg:text-3xl font-bold">Popular Categories</h2>
      <div className="flex flex-wrap justify-between gap-8">
        {data.map((item, index) => (
          <Link key={item.id} href={`/blog?cat=${item.slug.toLowerCase()}`}
            className="flex items-center gap-4 justify-center w-full md:w-[45%] lg:w-[30%] xl:w-1/4 2xl:w-1/5  h-16 text-foreground rounded-md px-4 transition-transform transform hover:scale-105" 
            style={{ background: item.color as string }}
          >
            <Image src={item.img as string} alt="" width={32} height={32} className="rounded-full" />
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;

