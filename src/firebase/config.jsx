// Import the necessary functions from the modular Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBAqNXIg_a9dYm2kWpAUYdRKKPEqM5cJ30",
    authDomain: "olx-clone-21d74.firebaseapp.com",
    projectId: "olx-clone-21d74",
    storageBucket: "olx-clone-21d74.appspot.com",
    messagingSenderId: "1673968656",
    appId: "1:1673968656:web:c77db7d7b2aad7e2879e95",
    measurementId: "G-TF93NHVBJ3",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const auth = getAuth(app);
const Storage = getStorage(app);

export { db, auth, Storage };
