import * as React from 'react';
import { Spacer } from '@/components/Spacer/Spacer';
import Image, { ImageProps } from 'next/image';
import { Metadata, ResolvingMetadata } from 'next'
import Menu from '@/components/Menu/Menu';
import MenuCategories from '@/components/MenuCategories/MenuCategories';
import Comments from '@/components/Comments/Comments';
import { formatDate } from '@/utility/utils';

import { getAllPostSlugs, getPost } from '@/lib/posts';
import { TPost } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc'


type TSinglePostProps = {
  params: { [key: string]: string | string[] | undefined };
}


const getSinglePost = (slug: string) => {
  const post: TPost = getPost(slug);
  return post;
}

export async function generateStaticParams() {
  const postIds = getAllPostSlugs();
  const paths = postIds.map((id) => ({ slug: id }));
  return paths;
}

export function generateMetadata( { params}: TSinglePostProps,  parent: ResolvingMetadata): Metadata | undefined {
  const post = getSinglePost(params.slug as string);
  if (!post) {
    return
  }
  const { title, date, description, image } = post;
 
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      authors: ['Konstantin Fukszon'],
      type: 'article',
      url: `https://www.codemusician.dev/posts/${post.slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}


export default async function SinglePage(props: TSinglePostProps) {
  const post = getSinglePost(props.params.slug as string);
  return (
    <div className="flex gap-4 2xl:gap-8 flex-col">
      <Spacer />
      <section className="flex gap-8 items-center flex-col md:flex-row">
        <div className="flex flex-col flex-[1] justify-between gap-4 2xl:gap-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl flex">{post.title}</h1>
          <div className="flex flex-[1] gap-4 items-center">
            <div className="relative 
              h-12 w-12
              2xl:h-16 2xl:w-16">
              <Image src="/me-captain.jpeg" alt="" width={300} height={300} className="rounded-full object-cover" />
            </div>
            <div className="flex gap-[0.1] flex-col text-muted-foreground text-sm">
              <span>Konstantin Fukszon</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
        <div className="flex relative h-70 xl:h-90 2xl:h-120 flex-[1]">
          <Image src={post.image} alt="" width={300} height={300} className="object-cover rounded w-full h-[calc(100%-1rem)]" />
        </div>
      </section>
      <Spacer />
      <section className="flex gap-12">
        <div className="flex-[3]">
          <article className="font-normal prose text-md prose-no-quotes prose-blockquote:text-accent text-foreground prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-foreground prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-accent" >
            <MDXRemote source={post.content} />
          </article>
          <Spacer />
          <Comments postslug={post.slug} />
        </div>
        <div className="flex-1">
          {/* <Menu /> */}
          <Spacer />
          {/* <MenuCategories /> */}
        </div>
      </section>
    </div>
  );
}

