"use client"
import * as React from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';
import { useState } from 'react';
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import { FaImage, FaPlus, FaExternalLinkAlt,FaPhotoVideo  } from "react-icons/fa";


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export interface IWritePageProps {
}

function WritePage(props: IWritePageProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('')
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.titleInput} />
      <div className={styles.editor}>
        <button className={styles.plusButton} onClick={() => setOpen(!open)}>
          <FaPlus size={18}  />
        </button>
        {open && (
          <div className={styles.addButtons} >
            <button className={styles.addButton}>
              <FaImage size={18} />
            </button>
            <button className={styles.addButton}>
              <FaExternalLinkAlt size={18} />
            </button>
            <button className={styles.addButton}>
              <FaPhotoVideo size={18} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble" value={value} onChange={setValue} placeholder='Tell your story' />
      </div>
      <button className={styles.publishButton}>Publish</button>
    </div>
  );
}

export default WritePage;
