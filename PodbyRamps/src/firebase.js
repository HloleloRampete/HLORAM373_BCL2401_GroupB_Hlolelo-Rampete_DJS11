// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDby_ns4ahMZyM0rM1smQSou4JQ8esYPOg",
  authDomain: "podbyramps.firebaseapp.com",
  projectId: "podbyramps",
  storageBucket: "podbyramps.appspot.com",
  messagingSenderId: "1034510252946",
  appId: "1:1034510252946:web:d025a4b8fd1d232b9a5f4b",
  measurementId: "G-3JT9HCMJ8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage }