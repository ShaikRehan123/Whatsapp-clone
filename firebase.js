// firebase = require('firebase')
// import firebase from "firebase";
import firebase from "firebase";
import 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAnDaO2UMa10Z05zws6VeaEQca8PiyJ18U",
    authDomain: "whatsapp-clone-521a5.firebaseapp.com",
    projectId: "whatsapp-clone-521a5",
    storageBucket: "whatsapp-clone-521a5.appspot.com",
    messagingSenderId: "159593447528",
    appId: "1:159593447528:web:43334efc33a6fa0ed17bdd",
    measurementId: "G-6MEG8X0PBE"
  };

const app = !firebase.apps.length ? new firebase.initializeApp(firebaseConfig) : new firebase.app();
const db = app.firestore();
const auth = app.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}
