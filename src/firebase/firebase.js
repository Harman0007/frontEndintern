// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnXQLbNQFpQ8wCuI9PohBP__hqvUGL9i4",
  authDomain: "internarea-b13cd.firebaseapp.com",
  projectId: "internarea-b13cd",
  storageBucket: "internarea-b13cd.appspot.com",
  messagingSenderId: "73811471919",
  appId: "1:73811471919:web:a8aec59e6a8051f45560da",
  measurementId: "G-XSSBFBZ91R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};