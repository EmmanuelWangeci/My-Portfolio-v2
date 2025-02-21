import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// Your web app's Firebase configuration (Replace with your credentials)
const firebaseConfig = {
    apiKey: "AIzaSyDCEsBr0wmhw2GQ4GV_ILR08vTrxCr9x84",
    authDomain: "emmanuelwangeci-portfolio.firebaseapp.com",
    projectId: "emmanuelwangeci-portfolio",
    storageBucket: "emmanuelwangeci-portfolio.appspot.com",
    messagingSenderId: "534161654146",
    appId: "1:534161654146:web:9d25be8dc43d231bc34f9b"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };