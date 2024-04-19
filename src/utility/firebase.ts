import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CLIENT_SECRET,
  authDomain: "nextjs-blog-app-420314.firebaseapp.com",
  projectId: "nextjs-blog-app-420314",
  storageBucket: "nextjs-blog-app-420314.appspot.com",
  messagingSenderId: "814836211903",
  appId: "1:814836211903:web:a3eb09c72bf4abda82a60a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const uploadFileToFirebase = (file: File, folder: string, callback: (url: string) => void) => {
  
  const fileName = new Date().getTime() + "-" + file.name;
  const storageRef = ref(storage, `${folder}/${fileName}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        callback(downloadURL);
      });
    }
  );
};

export { uploadFileToFirebase };