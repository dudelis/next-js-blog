import * as React from 'react';
import Image from 'next/image';

export interface IFeaturedProps {
}

export default function Featured(props: IFeaturedProps) {
  return (
    <section className="mt-8 md:mt-12 flex gap-8 justify-between items-center">
        <div className="hidden lg:flex relative h-96 flex-[1]">
          <Image src="/p1.jpeg" alt="" fill className="object-cover"/>
        </div>
        <div className="flex-[1] flex flex-col gap-4 text-foreground">
          <h2 className="text-xl md:text-2xl lg:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing</h2>
          <p className="text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repellendus nisi eos harum fuga enim at ea consectetur recusandae. Minus praesentium unde porro dolores. Dolorem libero officiis aut ipsum ab?</p>
          <button className="py-4 px-6 w-max">Read More</button>
        </div>
    </section>
  );
}

