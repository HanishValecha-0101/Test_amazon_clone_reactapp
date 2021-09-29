import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
  
        apiKey: "AIzaSyB0nuaTKuEHNlMDu7zJJAGxhsnzhqantwg",
        authDomain: "clone-6b85d.firebaseapp.com",
        databaseURL: "https://clone-6b85d.firebaseio.com",
        projectId: "clone-6b85d",
        storageBucket: "clone-6b85d.appspot.com",
        messagingSenderId: "609885333654",
        appId: "1:609885333654:web:3240345777e2a725fbfab7",
        measurementId: "G-95CN7LWDPG"
      

});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};