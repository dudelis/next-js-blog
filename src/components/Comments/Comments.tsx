"use client"
import * as React from 'react';
import styles from './comments.module.css';
import Image from 'next/image';
import { Spacer } from '../Spacer/Spacer';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import useSWR from 'swr'
import { Comments as Comment, Prisma } from '@prisma/client';
import formatDate from '@/utility/date';

export type TCommentsProps = {
  postslug: string;
}
export type TCommentWithUser = Prisma.CommentsGetPayload<{include: {user: true}}>; 

const Comments: React.FunctionComponent<TCommentsProps> = ({postslug}) => {
  const {status} = useSession();
  const { data, error } = useSWR(`/api/posts/${postslug}/comments`, { refreshInterval: 1000 });
  const comments = data as TCommentWithUser[];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status === 'authenticated' ? (
        <div className={styles.commentInput}>
          <textarea placeholder="Write a comment..." className={styles.input}></textarea>
          <button className={styles.button}>Post</button>
        </div>
      ) : (<Link href="/login">Login to post a comment</Link>)}
      <Spacer />
      <div className={styles.comments}>
        {data && comments.map((comment) => (
          <div className={styles.comment} key={comment.id}>
            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" className={styles.userImage} fill />
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

    </div>
  );
};

export default Comments;
