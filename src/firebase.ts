// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_8LgllQUU7drNklqdLSBiPyw9T8ywGEg",
    authDomain: "netflix-clone-20957.firebaseapp.com",
    projectId: "netflix-clone-20957",
    storageBucket: "netflix-clone-20957.firebasestorage.app",
    messagingSenderId: "1000532154334",
    appId: "1:1000532154334:web:60912b41ff6d0065ceaf4f"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)

export default app
export { auth, db }