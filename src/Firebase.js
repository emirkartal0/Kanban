import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAENR-GhdUIavrPCGND21ob8R6XVLjm8YQ",
    authDomain: "kamban-16636.firebaseapp.com",
    projectId: "kamban-16636",
    storageBucket: "kamban-16636.appspot.com",
    messagingSenderId: "535987537221",
    appId: "1:535987537221:web:50e0d0de4468de2f7c2a2c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export default db;
export { auth, provider };