import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    // apiKey: "AIzaSyDjXkDk-GLc0soSFSdUcgdPPfXoaXqeZeA",
    // authDomain: "e-commerce-7454e.firebaseapp.com",
    // projectId: "e-commerce-7454e",
    // storageBucket: "e-commerce-7454e.appspot.com",
    // messagingSenderId: "453694741760",
    // appId: "1:453694741760:web:62f7c34c120a15f7c827e5",
    // measurementId: "G-TKBC8PNHQV"
    apiKey: "AIzaSyBbRZgMQhNXCDZLkcNxEygPzAisVhCmI_w",
    authDomain: "e-commerce-2cd3a.firebaseapp.com",
    projectId: "e-commerce-2cd3a",
    storageBucket: "e-commerce-2cd3a.appspot.com",
    messagingSenderId: "182406055430",
    appId: "1:182406055430:web:a87cb22cef24f127ec6587"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, db, storage };
export default app