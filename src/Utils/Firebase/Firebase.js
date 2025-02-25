// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL3Z6wgrNehTf__Act8DPsz0N6w4XEPwI",
  authDomain: "ecommersstorefinal.firebaseapp.com",
  projectId: "ecommersstorefinal",
  storageBucket: "ecommersstorefinal.appspot.com",
  messagingSenderId: "900405049889",
  appId: "1:900405049889:web:2c45ef034f282492a48160",
  measurementId: "G-RMVWTGRZ16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;