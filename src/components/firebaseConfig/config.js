// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhWhFfRLQcjt9b32VWS-UdafLsURRjBQ8",
  authDomain: "mcandb-b70a4.firebaseapp.com",
  projectId: "mcandb-b70a4",
  storageBucket: "mcandb-b70a4.appspot.com",
  messagingSenderId: "206328197335",
  appId: "1:206328197335:web:fcb6351048e146e8b98092",
  measurementId: "G-QBN43WCG5H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
