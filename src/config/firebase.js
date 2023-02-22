// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDL9auLaPksHKYbQiMexkjsOrme5DVD5_8",
    authDomain: "putingoodhands.firebaseapp.com",
    projectId: "putingoodhands",
    storageBucket: "putingoodhands.appspot.com",
    messagingSenderId: "1024444670969",
    appId: "1:1024444670969:web:32281ceffb4836fced9328",
    measurementId: "G-RHJCG4PQP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };