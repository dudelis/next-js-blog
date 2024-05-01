"use client"
import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import useSWR from 'swr'
import { Comments as Comment, Prisma } from '@prisma/client';
import {formatDateTime} from '@/utility/utils';


export type TCommentsProps = {
  postslug: string;
}
export type TCommentWithUser = Prisma.CommentsGetPayload<{ include: { user: true } }>;

const fetcher = (url: string) => fetch(url).then(res => res.json()).catch(err => new Error(err));
const Comments: React.FunctionComponent<TCommentsProps> = ({ postslug }) => {
  const { status } = useSession();
  const { data, isLoading, mutate, error } = useSWR(
    `/api/posts/${postslug}/comments`,
    fetcher
  );
  const comments = data as TCommentWithUser[];

  const [content, setContent] = useState<string>("");
  const handleSubmit = async () => {
    await fetch(`/api/posts/${postslug}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content, postSlug: postslug
      })
    });
    setContent("");
    mutate();
  }

  return (
    <section className="flex flex-col w-full">
      <h2 className="items-center justify-between mb-12 text-xl font-bold md:text-2xl lg:text-3xl">Comments</h2>
      {status === 'authenticated' ? (
        <div className="flex items-center justify-between gap-4 mt-4">
          <textarea placeholder="Write a comment..." className="flex-[6] p-4 min-w-10 " onChange={e => setContent(e.target.value)} value={content}></textarea>
          <button className="flex-[1] bg-accent-foreground border-none cursor-pointer rounded-sm p-4 font-bold" onClick={handleSubmit}>Post</button>
        </div>
      ) : (<Link href="/login">Login to post a comment</Link>)}
      <div className="flex flex-col gap-4 p-4 border-indigo-500 border-solid border-b-1">
        {isLoading ? "loading" : comments.map((comment) => (
          <div className="flex flex-col gap-4 p-4 border-solid border-b-[1px] border-muted-foreground" key={comment.id}>
            <div className="flex flex-[1] gap-4 items-center">
              <div className="relative w-12 h-12">
                <Image src={comment.user.image ? comment.user.image : "/empty user.png"} alt="" className="object-cover rounded-full" fill />
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-medium">{comment.user.name}</span>
                <span className="font-light">{formatDateTime(comment.createdAt)}</span>
              </div>
            </div>
            <p className='text-sm'>
              {comment.content}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Comments;
