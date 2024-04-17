// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgjT5gQEYkG55D4EAYGXY2EK--WRl2BGE",
  authDomain: "suryasrasooi-8a0d7.firebaseapp.com",
  projectId: "suryasrasooi-8a0d7",
  storageBucket: "suryasrasooi-8a0d7.appspot.com",
  messagingSenderId: "130066362305",
  appId: "1:130066362305:web:3a2d7b1515237597c04940",
  measurementId: "G-EM2M2RF9CK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
