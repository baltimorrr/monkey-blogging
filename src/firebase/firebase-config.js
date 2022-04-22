// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCAxjGkd60rBVBXGThoG0obKrBQLpIhTQI",
    authDomain: "monkey-blogging-5055a.firebaseapp.com",
    projectId: "monkey-blogging-5055a",
    storageBucket: "monkey-blogging-5055a.appspot.com",
    messagingSenderId: "341602322293",
    appId: "1:341602322293:web:b7ee3333bb4122b618b53c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
