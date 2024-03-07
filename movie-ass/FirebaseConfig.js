// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlUNoZNzHHSOZgW9Ryk1Gol-IielVAaVQ",
  authDomain: "moviefire-base.firebaseapp.com",
  projectId: "moviefire-base",
  storageBucket: "moviefire-base.appspot.com",
  messagingSenderId: "177877326031",
  appId: "1:177877326031:web:cae4ed5dfe102e56367fba"
  
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth (FIREBASE_APP);
