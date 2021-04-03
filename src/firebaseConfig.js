import firebase from 'firebase';
import '@firebase/firestore'; // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase';

const myFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBRsfUHhRK6N4-yaQ0X-XL-pvZtE7TJCVs",
    authDomain: "gift-tree-bubbles.firebaseapp.com",
    projectId: "gift-tree-bubbles",
    storageBucket: "gift-tree-bubbles.appspot.com",
    messagingSenderId: "371566937572",
    appId: "1:371566937572:web:1b7cca981777d27b0833f1",
    measurementId: "G-L6NHT00RGT"
});

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

export default reduxSagaFirebase;