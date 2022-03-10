import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLXTfcVOjfe7TkUV1mvvWPFpO3exZXYmo",
    authDomain: "asada-app.firebaseapp.com",
    projectId: "asada-app",
    storageBucket: "asada-app.appspot.com",
    messagingSenderId: "706697922713",
    appId: "1:706697922713:web:142eeb58173e8863a79008",
    measurementId: "G-PZ1V9BCL82"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();

export {
    db,
    firebase
}