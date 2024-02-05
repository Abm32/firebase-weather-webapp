// firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEH8_KtgiY0aQyIeAATk4lsfx_TnN2Lvw",
    authDomain: "weather-app-d74f0.firebaseapp.com",
    projectId: "weather-app-d74f0",
    storageBucket: "weather-app-d74f0.appspot.com",
    messagingSenderId: "311520177329",
    appId: "1:311520177329:web:b45dc2381a1ee3fa3d0690",
    measurementId: "G-7NVZ9DNZTJ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
