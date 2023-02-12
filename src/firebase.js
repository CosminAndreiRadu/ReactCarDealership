import { getDatabase, startAfter } from "firebase/database"
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8OxaEIiKyjGEfN5YSK4zY6Ey9aIv7R8s",
  authDomain: "testreactre.firebaseapp.com",
  projectId: "testreactre",
  storageBucket: "testreactre.appspot.com",
  messagingSenderId: "659438467019",
  appId: "1:659438467019:web:ce98c531acc194d051684e",
  measurementId: "G-1EPBF277XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
