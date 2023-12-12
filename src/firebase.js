// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBKU7ztlJpohzMwJBQgOPgMlzOFdy9g3Wk",
    authDomain: "foodorder-10e1d.firebaseapp.com",
    projectId: "foodorder-10e1d",
    storageBucket: "foodorder-10e1d.appspot.com",
    messagingSenderId: "46121427716",
    appId: "1:46121427716:web:8a0bf4e8b08176c04da651",
    measurementId: "G-YT7VXQD71P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app)
const firebaseDatabase = getDatabase(app)
const fireStoreDatabase = getFirestore(app)

export {
    auth, storage, firebaseDatabase,
    fireStoreDatabase,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}
// npm install -g firebase-tools