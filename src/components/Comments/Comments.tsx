import * as React from 'react';
import styles from './comments.module.css';
import Image from 'next/image';
import { Spacer } from '../Spacer/Spacer';
import Link from 'next/link';

interface ICommentsProps {

}

export type TComment = {
  id: number;
  user: string;
  date: string;
  content: string;
  replies: TComment[];
}

const comments: TComment[] = [
  {
    id: 1,
    user: "John",
    date: "2022-10-01",
    content: "This is the first comment",
    replies: []
  },
  {
    id: 2,
    user: "Jane",
    date: "2022-10-02",
    content: "This is the second comment",
    replies: []
  },
  {
    id: 3,
    user: "Mike",
    date: "2022-10-03",
    content: "This is the third comment",
    replies: []
  },
  {
    id: 4,
    user: "Sarah",
    date: "2022-10-04",
    content: "This is the fourth comment",
    replies: []
  },
  {
    id: 5,
    user: "David",
    date: "2022-10-05",
    content: "This is the fifth comment",
    replies: []
  }
]

const Comments: React.FunctionComponent<ICommentsProps> = (props) => {
  const authenticated = true;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {authenticated ? (
        <div className={styles.commentInput}>
          <textarea placeholder="Write a comment..." className={styles.input}></textarea>
          <button className={styles.button}>Post</button>
        </div>
      ) : (<Link href="/login">Login to post a comment</Link>)}
      <Spacer />
      <div className={styles.comments}>
        {comments.map((comment) => (
          <div className={styles.comment} key={comment.id}>
            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" className={styles.userImage} fill />
              </div>
              <div className={styles.userTextContainer}>
                <span className={styles.userName}>{comment.user}</span>
                <span className={styles.postDate}>{comment.date}</span>
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
