// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Dw7eC7S15N0p1vXBhGVt1M1VWk1ufLI",
  authDomain: "notes-15c51.firebaseapp.com",
  projectId: "notes-15c51",
  storageBucket: "notes-15c51.appspot.com",
  messagingSenderId: "101150718007",
  appId: "1:101150718007:web:424883cd378990c63ee7b2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore();
