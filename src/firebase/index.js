// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRS-4WfHWr4pgFreeNAO0DdCIgIUx56A8",
  authDomain: "webshop-250a1.firebaseapp.com",
  projectId: "webshop-250a1",
  storageBucket: "webshop-250a1.firebasestorage.app",
  messagingSenderId: "944689319842",
  appId: "1:944689319842:web:c202f2157dd0c04014acfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);