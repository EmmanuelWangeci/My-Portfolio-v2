import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; 

// Your web app's Firebase configuration (Replace with your credentials)
const firebaseConfig = {
    apiKey: "AIzaSyDCEsBr0wmhw2GQ4GV_ILR08vTrxCr9x84",
    authDomain: "emmanuelwangeci-portfolio.firebaseapp.com",
    projectId: "emmanuelwangeci-portfolio",
    storageBucket: "emmanuelwangeci-portfolio.appspot.com",
    messagingSenderId: "534161654146",
    appId: "1:534161654146:web:9d25be8dc43d231bc34f9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
