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
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   // apiKey: "AIzaSyDhWhFfRLQcjt9b32VWS-UdafLsURRjBQ8",
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   // authDomain: "mcandb-b70a4.firebaseapp.com",
//   projectId: process.env.REACT_APP_PROJECTID,
//   // projectId: "mcandb-b70a4",
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyDhWhFfRLQcjt9b32VWS-UdafLsURRjBQ8",
//   authDomain: "mcandb-b70a4.firebaseapp.com",
//   projectId: "mcandb-b70a4",
//   storageBucket: "mcandb-b70a4.appspot.com",
//   messagingSenderId: "206328197335",
//   appId: "1:206328197335:web:fcb6351048e146e8b98092",
//   measurementId: "G-QBN43WCG5H",
// };

//rules

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
