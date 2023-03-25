// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe2NgpcxU_hMJ7W8aDa3osygMZDA9PeMU",
  authDomain: "storeexpiredfood.firebaseapp.com",
  projectId: "storeexpiredfood",
  storageBucket: "storeexpiredfood.appspot.com",
  messagingSenderId: "1050508541486",
  appId: "1:1050508541486:web:eaa920191fc1faa4d1e9bf",
  measurementId: "G-MVJB8T6WM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
const analytics = getAnalytics(app);