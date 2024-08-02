
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

/* Métodos de firebase Auth */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, // Asegúrate de importar signOut aquí
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUVaagNbzJYRJX8b3-_dRiuXqAYKqt1fE",
  authDomain: "authentication-hosting-fce64.firebaseapp.com",
  projectId: "authentication-hosting-fce64",
  storageBucket: "authentication-hosting-fce64.appspot.com",
  messagingSenderId: "242595835075",
  appId: "1:242595835075:web:7b56ed1e6865a5008ec676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, // Asegúrate de exportar signOut aquí
  onAuthStateChanged,
};

export default app;
