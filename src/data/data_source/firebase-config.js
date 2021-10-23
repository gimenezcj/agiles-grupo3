import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBzxGFeiHGHYgKsBH7M7AQLf8bhQKesXYA",
  authDomain: "hola-firebase-e82f6.firebaseapp.com",
  databaseURL: "https://hola-firebase-e82f6.firebaseio.com",
  projectId: "hola-firebase-e82f6",
  storageBucket: "hola-firebase-e82f6.appspot.com",
  messagingSenderId: "550805858296",
  appId: "1:550805858296:web:52e17c1adcc1bd8df3180d",
  measurementId: "G-CXYVRHY4E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;