import { initializeApp } from "firebase/app"
import{ getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTVBuqcOIe2ruVj7urY4UbPXUvRevI2Y8",
    authDomain: "react-firebase-fb98a.firebaseapp.com",
    projectId: "react-firebase-fb98a",
    storageBucket: "react-firebase-fb98a.firebasestorage.app",
    messagingSenderId: "522967893064",
    appId: "1:522967893064:web:d16488682f30c96513047d"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)