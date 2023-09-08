// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGt3OEeF_uNFny33tteMMgAVIDI0m9gjw",
  authDomain: "dynamics-production.firebaseapp.com",
  projectId: "dynamics-production",
  storageBucket: "dynamics-production.appspot.com",
  messagingSenderId: "731035377075",
  appId: "1:731035377075:web:10049b42f177855fa5bfc6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const storageApp = getStorage(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseAuth = getAuth( FirebaseApp );