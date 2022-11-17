import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBiGprK80OgFkS9bOnDsYsvE5eD6jqxJco",
    authDomain: "supple-outlet-350412.firebaseapp.com",
    projectId: "supple-outlet-350412",
    storageBucket: "supple-outlet-350412.appspot.com",
    messagingSenderId: "690030516661",
    appId: "1:690030516661:web:7c339991d276b5981921fc"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)