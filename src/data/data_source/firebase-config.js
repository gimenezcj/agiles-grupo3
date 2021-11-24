import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTJkSB1zMEd4MT4UBMJs8XGWi9r7Q5iSg",
  authDomain: "agiles-ee12f.firebaseapp.com",
  projectId: "agiles-ee12f",
  storageBucket: "agiles-ee12f.appspot.com",
  messagingSenderId: "129079492680",
  appId: "1:129079492680:web:73d7e6dfd7a582045a987d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;