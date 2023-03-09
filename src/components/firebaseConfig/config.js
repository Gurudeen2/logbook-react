import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

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

export const db = getFirestore(app);
//rules

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }

// const firebaseConfig = {
//   apiKey: "AIzaSyDhWhFfRLQcjt9b32VWS-UdafLsURRjBQ8",
//   authDomain: "mcandb-b70a4.firebaseapp.com",
//   projectId: "mcandb-b70a4",
//   storageBucket: "mcandb-b70a4.appspot.com",
//   messagingSenderId: "206328197335",
//   appId: "1:206328197335:web:fcb6351048e146e8b98092",
//   measurementId: "G-QBN43WCG5H",
// };
