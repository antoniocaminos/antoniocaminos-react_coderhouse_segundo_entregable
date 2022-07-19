import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCHOtudShA9yyRY6s8p3jJoxlAQhA-h634",
  authDomain: "mi-primer-firebase-7788d.firebaseapp.com",
  projectId: "mi-primer-firebase-7788d",
  storageBucket: "mi-primer-firebase-7788d.appspot.com",
  messagingSenderId: "1021926032007",
  appId: "1:1021926032007:web:89b2c382d29de3cb14ee22"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);