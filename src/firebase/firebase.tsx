// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSCGw5ZExnT3a572T-dDO-u8ASbvusM3Y",
  authDomain: "globalgoods-23ad8.firebaseapp.com",
  projectId: "globalgoods-23ad8",
  storageBucket: "globalgoods-23ad8.appspot.com",
  messagingSenderId: "1044428308715",
  appId: "1:1044428308715:web:6fb63c2f7a2d1cbaf47eae",
  measurementId: "G-1QK32TX1B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
