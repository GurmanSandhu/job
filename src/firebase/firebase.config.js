// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC04aeZZXIBW-VrXTNvIbM8KjD4PV0LbbI",
  authDomain: "job-portal-demo-6d8c6.firebaseapp.com",
  projectId: "job-portal-demo-6d8c6",
  storageBucket: "job-portal-demo-6d8c6.appspot.com",
  messagingSenderId: "132068782420",
  appId: "1:132068782420:web:bf2e000cf7be03fca6d8c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;