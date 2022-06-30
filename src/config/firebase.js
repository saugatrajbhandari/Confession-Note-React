// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBLu2Gak9ZQfRBKjHcClFZSzL-EWITCx2I",
  authDomain: "confess-note-c5e0f.firebaseapp.com",
  databaseURL: "https://confess-note-c5e0f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-note-c5e0f",
  storageBucket: "confess-note-c5e0f.appspot.com",
  messagingSenderId: "383053203683",
  appId: "1:383053203683:web:b7c51938c84f8385c45dd6",
  measurementId: "G-7J9NLYD89N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);

export {database, set, ref, onValue }