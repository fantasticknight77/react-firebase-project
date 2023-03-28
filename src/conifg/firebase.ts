// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD91d55zFRYFUvAfJ2Il8AXehnoENtSPIs",
    authDomain: "react-1-270323.firebaseapp.com",
    projectId: "react-1-270323",
    storageBucket: "react-1-270323.appspot.com",
    messagingSenderId: "97790126947",
    appId: "1:97790126947:web:4ad9211d2f8c9b3367c156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);