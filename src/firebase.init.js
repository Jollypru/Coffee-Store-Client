// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3w417ZwllVm6PhtCDyFm1cHcmA6qlru8",
  authDomain: "coffee-store-52186.firebaseapp.com",
  projectId: "coffee-store-52186",
  storageBucket: "coffee-store-52186.firebasestorage.app",
  messagingSenderId: "1030807454064",
  appId: "1:1030807454064:web:975a8c7f553b4505740fb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);