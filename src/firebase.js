// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAXsxYsEdw3PnLSo7bvWIG_GL6AbSdC4Q",
  authDomain: "atuwasei.firebaseapp.com",
  projectId: "atuwasei",
  storageBucket: "atuwasei.appspot.com",
  messagingSenderId: "338918443524",
  appId: "1:338918443524:web:0db59669ad0ce4b6ac0351",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
