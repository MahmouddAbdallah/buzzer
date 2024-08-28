import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBjlr5EJt3fs1H92lVgg_l-d5RTdLGJMcs",
    authDomain: "buzzer-dd3cc.firebaseapp.com",
    databaseURL: "https://buzzer-dd3cc-default-rtdb.firebaseio.com",
    projectId: "buzzer-dd3cc",
    storageBucket: "buzzer-dd3cc.appspot.com",
    messagingSenderId: "721427766712",
    appId: "1:721427766712:web:3c5b9d4f1f1c70732f834d",
    measurementId: "G-D2M72TKG2B"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, db, storage };
export default app