import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbdIGat3Ifs2r4_XZqEM84WH5rVSPLZcw",
  authDomain: "sportia-41142.firebaseapp.com",
  projectId: "sportia-41142",
  storageBucket: "sportia-41142.firebasestorage.app",
  messagingSenderId: "204074592567",
  appId: "1:204074592567:web:5f20cf22e6b44be73792b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//inicializar firestore
const db = getFirestore(app);

export default db;
