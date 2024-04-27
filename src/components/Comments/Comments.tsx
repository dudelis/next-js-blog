"use client"
import * as React from 'react';
import { useState } from 'react';
import styles from './comments.module.css';
import Image from 'next/image';
import { Spacer } from '../Spacer/Spacer';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import useSWR from 'swr'
import { Comments as Comment, Prisma } from '@prisma/client';
import {formatDate} from '@/utility/utils';


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
          <button className={styles.button} onClick={handleSubmit}>Post</button>
        </div>
      ) : (<Link href="/login">Login to post a comment</Link>)}
      <div className={styles.comments}>
        {isLoading ? "loading" : comments.map((comment) => (
          <div className={styles.comment} key={comment.id}>
            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src={comment.user.image ? comment.user.image : "/empty user.png"} alt="" className={styles.userImage} fill />
              </div>
              <div className={styles.userTextContainer}>
                <span className={styles.userName}>{comment.user.name}</span>
                <span className={styles.postDate}>{formatDate(comment.createdAt)}</span>
              </div>
            </div>
            <p>
              {comment.content}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Comments;
