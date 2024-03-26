// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";
import {GetFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5_K65QA6i3f86LQPQ5rXTLbcsm_maUdQ",
  authDomain: "done-500a3.firebaseapp.com",
  projectId: "done-500a3",
  storageBucket: "done-500a3.appspot.com",
  messagingSenderId: "1034994465925",
  appId: "1:1034994465925:web:3954e536422663bace7dec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const FIREBASE_AUTH =getAuth(app)
export const FIREBASE_DB = GetFirestore(app)