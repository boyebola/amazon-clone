import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtJF4VSZeJ4Z3z6_pXqixQSSZortlxb74",
    authDomain: "clone-a8a38.firebaseapp.com",
    databaseURL: "https://clone-a8a38.firebaseio.com",
    projectId: "clone-a8a38",
    storageBucket: "clone-a8a38.appspot.com",
    messagingSenderId: "904649842088",
    appId: "1:904649842088:web:58ab4c0101306e6056119d",
    measurementId: "G-8NW3HVVPP7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}