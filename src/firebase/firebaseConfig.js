// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDf9mX8DFDdQmQv8d2J5v7Bsm4ZEP9Ik4Y",
    authDomain: "ramzanbase.firebaseapp.com",
    projectId: "ramzanbase",
    storageBucket: "ramzanbase.firebasestorage.app",
    messagingSenderId: "723798272482",
    appId: "1:723798272482:web:d571224bcccadc0ca131bb",
    measurementId: "G-SHDLK9PDQG",
    databaseURL: "https://ramzanbase-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);