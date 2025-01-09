// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDd97uWkQi-DX6vxUj7_Wlcn1duusY5GJE",
  authDomain: "authentication-825f6.firebaseapp.com",
  projectId: "authentication-825f6",
  storageBucket: "authentication-825f6.firebasestorage.app",
  messagingSenderId: "721169518533",
  appId: "1:721169518533:web:81438ec1612ff0b6a705ac",
  measurementId: "G-YL6TXE38EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth,app};