// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrxmNAcEIIz8iareCrnsJIyu_JVaKxHuc",
  authDomain: "tutorial-3a8d1.firebaseapp.com",
  projectId: "tutorial-3a8d1",
  storageBucket: "tutorial-3a8d1.appspot.com",
  messagingSenderId: "204941470742",
  appId: "1:204941470742:web:821762b19b7364c351d937",
  measurementId: "G-Z55YN7D866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()