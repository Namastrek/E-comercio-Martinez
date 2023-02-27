// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBhiBUMpeLzV6JZBiyMh4TKoZ8ITv2Cg4",
  authDomain: "jueguitosya-31b40.firebaseapp.com",
  projectId: "jueguitosya-31b40",
  storageBucket: "jueguitosya-31b40.appspot.com",
  messagingSenderId: "785906736571",
  appId: "1:785906736571:web:58729c7d4e95a7f06a789e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)