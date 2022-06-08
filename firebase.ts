// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLRTFjN_ibkmmQTf-2rq-dxOt0Ne2-UAI",
  authDomain: "netflix-nextjs-b1344.firebaseapp.com",
  projectId: "netflix-nextjs-b1344",
  storageBucket: "netflix-nextjs-b1344.appspot.com",
  messagingSenderId: "636254771917",
  appId: "1:636254771917:web:49dc1e4bac2b6ea803a784"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }