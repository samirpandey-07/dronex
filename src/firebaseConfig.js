// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dronex-form.firebaseapp.com",
  projectId: "dronex-form",
  storageBucket: "dronex-form.appspot.com",
  messagingSenderId: "910214494125",
  appId: "1:910214494125:web:19f498c34465fa9eb15324",
  measurementId: "G-Y6BD34PTP3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
const db = getFirestore(app);

export { db };
