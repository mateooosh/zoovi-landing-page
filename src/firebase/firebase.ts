// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase } from "firebase/database"
import { ref as dbRef } from '@firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXiR7B9OdTJbEAuR2XLjkiCbDC7B8-9Ck",
    authDomain: "zoovi-5ad41.firebaseapp.com",
    databaseURL: "https://zoovi-5ad41-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "zoovi-5ad41",
    storageBucket: "zoovi-5ad41.firebasestorage.app",
    messagingSenderId: "389440030815",
    appId: "1:389440030815:web:8ae014758ba38610b9f3ea",
    measurementId: "G-PR2P3MZGW0"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
const database = getDatabase(firebaseApp)
const databaseRef = dbRef(database)

export { firebaseApp, analytics, database, databaseRef }