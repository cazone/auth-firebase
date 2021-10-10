import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBOL6KvIAMKcdaUlP-Z6gCnLWs88YsDlv0",
    authDomain: "firestore-auth-1-be625.firebaseapp.com",
    projectId: "firestore-auth-1-be625",
    storageBucket: "firestore-auth-1-be625.appspot.com",
    messagingSenderId: "196532223192",
    appId: "1:196532223192:web:96531fdde2812ec5c12bad"
  };
  
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp;
  
  firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  };
  
  export { db, auth, firebase, marcaTiempo };