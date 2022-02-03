import { initializeApp } from 'firebase/app';
import { getAuth } from  "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";




const app = initializeApp({
    apiKey: "AIzaSyCB4xYCsdxvtJVItcGaiLFucvv8qNa1HyE",
    authDomain: "dolly-ecommerce-a7c64.firebaseapp.com",
    projectId: "dolly-ecommerce-a7c64",
    storageBucket: "dolly-ecommerce-a7c64.appspot.com",
    messagingSenderId: "220673738825",
    appId: "1:220673738825:web:0a5efd80f1f433e821d798"
});


export const auth = getAuth(app) 

export const db = getFirestore(app)

export const storage = getStorage(app);


export default app

