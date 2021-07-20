import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCf4D2RqqheoD5toIeNEaNzkyf5egmrMFk",
    authDomain: "login-test-2b8d0.firebaseapp.com",
    projectId: "login-test-2b8d0",
    storageBucket: "login-test-2b8d0.appspot.com",
    messagingSenderId: "732497452167",
    appId: "1:732497452167:web:8b15dc108a9f2702866c22"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;