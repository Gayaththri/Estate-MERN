// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-38fbd.firebaseapp.com",
  projectId: "mern-estate-38fbd",
  storageBucket: "mern-estate-38fbd.appspot.com",
  messagingSenderId: "1044363468955",
  appId: "1:1044363468955:web:5f1026db4b6c9e3a07263e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
