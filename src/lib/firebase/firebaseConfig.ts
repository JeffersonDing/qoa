import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5bZkiDci5inrcYjt3dyJ0sVDKKwAjqhA",
  authDomain: "quitoa-proj.firebaseapp.com",
  projectId: "quitoa-proj",
  storageBucket: "quitoa-proj.appspot.com",
  messagingSenderId: "102326052778",
  appId: "1:102326052778:web:728a753f15a55e3c05edd3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
