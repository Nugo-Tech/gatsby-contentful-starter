import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUX-BOrlaVziW2p9FTcRvpZ_fLDEEeUB8",
  authDomain: "suwa-diviya.firebaseapp.com",
  projectId: "suwa-diviya",
  storageBucket: "suwa-diviya.appspot.com",
  messagingSenderId: "887511651631",
  appId: "1:887511651631:web:45c3b3e696f82e5be63dda",
  measurementId: "G-5E9VQB6V5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
