import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDRyVB-YmMvBfeYkAiYCCMSaGQeDSIWfgQ",
  authDomain: "crud-39b91.firebaseapp.com",
  projectId: "crud-39b91",
  storageBucket: "crud-39b91.appspot.com",
  messagingSenderId: "176829111045",
  appId: "1:176829111045:web:5c16f15cdb3e176d24756c",
  measurementId: "G-XTJ3SX7Z5Q",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
