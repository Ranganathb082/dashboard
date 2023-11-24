// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";




import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB42ajJ3RzYVVk8NPnBQMvoRtBDpTW-Pb4",
  authDomain: "fir-web-fd139.firebaseapp.com",
  projectId: "fir-web-fd139",
  storageBucket: "fir-web-fd139.appspot.com",
  messagingSenderId: "749026225338",
  appId: "1:749026225338:web:3939ea94d2c078c4986683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const db = getFirestore(app);
export const storage = getStorage(app);


export const auth = getAuth()