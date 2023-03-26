// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getDoc, doc, setDoc } from "firebase/firestore";

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
export const storage=getStorage(app);


export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  // console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
          await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInfo
          })
      } catch (error) {
          console.log('error creating the user', error.message)
      }
  }
  return userDocRef
}

export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth, callback)
