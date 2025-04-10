import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDIp6erkQafnbAkFvZXPMbLXg0dg3_KLGo",
  authDomain: "formdata-26395.firebaseapp.com",
  projectId: "formdata-26395",
  storageBucket: "formdata-26395.firebasestorage.app",
  messagingSenderId: "789447287991",
  appId: "1:789447287991:web:14c9fd97eaa76e5eef1932",
  measurementId: "G-2KJXSNXZTD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}