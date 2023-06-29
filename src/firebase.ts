// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCetVd8a4tnYYR1zD6TkWumHQR7sFtj5wI",
  authDomain: "altschool-capstone-3e9a4.firebaseapp.com",
  projectId: "altschool-capstone-3e9a4",
  storageBucket: "altschool-capstone-3e9a4.appspot.com",
  messagingSenderId: "119665579816",
  appId: "1:119665579816:web:ee659f5820c8be77ba221d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

