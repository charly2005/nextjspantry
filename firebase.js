// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhhGj_ajqk43aPUhYySUbIE9TcCtxLuAQ",
  authDomain: "learnfirebase-5e234.firebaseapp.com",
  projectId: "learnfirebase-5e234",
  storageBucket: "learnfirebase-5e234.appspot.com",
  messagingSenderId: "859817659501",
  appId: "1:859817659501:web:72f2673d16d17d7c128364",
  measurementId: "G-VB1ZBRNWBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}