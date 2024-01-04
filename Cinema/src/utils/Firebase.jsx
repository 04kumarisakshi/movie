// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUopFgyQK91AcI2srptK7i9d6ZUqrHE8k",
  authDomain: "cinema-118da.firebaseapp.com",
  projectId: "cinema-118da",
  storageBucket: "cinema-118da.appspot.com",
  messagingSenderId: "469353302793",
  appId: "1:469353302793:web:afd209cf4ff3aa9cc461d8",
  measurementId: "G-X89PPHS46W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth =getAuth(app);