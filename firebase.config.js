// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjIfUaB2ysW0JVQYbq1dkKrcXoJIBJo_Q",
  authDomain: "health-care-38f6a.firebaseapp.com",
  projectId: "health-care-38f6a",
  storageBucket: "health-care-38f6a.appspot.com",
  messagingSenderId: "214029019242",
  appId: "1:214029019242:web:98b4df81d19880c0ef4213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)

export { auth , db }