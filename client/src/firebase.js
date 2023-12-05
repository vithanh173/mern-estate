// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-50928.firebaseapp.com",
    projectId: "mern-estate-50928",
    storageBucket: "mern-estate-50928.appspot.com",
    messagingSenderId: "93432959265",
    appId: "1:93432959265:web:ff1f749bf7bad46af4ee60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);