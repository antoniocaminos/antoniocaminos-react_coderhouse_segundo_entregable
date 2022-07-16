
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHOtudShA9yyRY6s8p3jJoxlAQhA-h634",
  authDomain: "mi-primer-firebase-7788d.firebaseapp.com",
  projectId: "mi-primer-firebase-7788d",
  storageBucket: "mi-primer-firebase-7788d.appspot.com",
  messagingSenderId: "1021926032007",
  appId: "1:1021926032007:web:89b2c382d29de3cb14ee22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = app.firestore();