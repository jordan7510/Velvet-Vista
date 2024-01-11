// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "parlour-project-3d33e.firebaseapp.com",
  projectId: "parlour-project-3d33e",
  storageBucket: "parlour-project-3d33e.appspot.com",
  messagingSenderId: "599400868501",
  appId: "1:599400868501:web:221af41e78e63c9ec2c99c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);