"use client"
import * as React from 'react';
import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import { FaImage, FaPlus, FaExternalLinkAlt, FaPhotoVideo } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { uploadFileToFirebase } from '@/utility/firebase';
import { slugify } from '@/utility/utils';
import { Input } from '@/components/ui/input';
import { Combobox, TComboBoxItem } from '@/components/ui/combobox';
import { Category } from '@prisma/client';


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export interface IWritePageProps {
}
const getCategories = async () => {
  const response = await fetch(`/api/categories`, {cache: "no-store"});
  return response.json();
}


function WritePage(props: IWritePageProps) {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>('');
  const [categories, setCategories] = useState<TComboBoxItem[]>([]);
  
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.map((item: Category) => ({ label: item.title, value: item.id })));
    });
  }, []);

  useEffect(()=> {
    if (file) {
      uploadFileToFirebase(file, "images", (url) => {setImageUrl(url)});
    }
  }, [file]);

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        content,
        img: imageUrl,
        slug: slugify(title),
        categoryId: category
      })
    });
  }
  if (status === "loading") return <div className={styles.loading}>Loading...</div>
  if (status === "unauthenticated") router.push("/");

  return (
    <div className={styles.container}>
      <Input type="text" placeholder="Title" value={title} className={styles.titleInput} onChange={e => setTitle(e.target.value)} />
      <Combobox value={category} onChange={setCategory} items={categories} />
      <div className={styles.editor}>
        <button className={styles.plusButton} onClick={() => setOpen(!open)}>
          <FaPlus size={18} />
        </button>
        {open && (
          <div className={styles.addButtons} >
            <input
              id="image"
              type="file"
              className={styles.fileInput}
              onChange={e => setFile(e.target.files && e.target.files[0])}
              style={{ display: "none" }}
              accept="image/*"
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <FaImage size={18} />
              </label>
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
          theme="bubble" value={content} onChange={setContent} placeholder='Tell your story' />
      </div>
      <button className={styles.publishButton} onClick={handleSubmit}>Publish</button>
    </div>
  );
}

export default WritePage;
