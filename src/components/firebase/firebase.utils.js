import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALkFGm0xBe5hh60ruyF9RcfGpDOTbG1pE",
    authDomain: "react-e-shop-db.firebaseapp.com",
    projectId: "react-e-shop-db",
    storageBucket: "react-e-shop-db.appspot.com",
    messagingSenderId: "31303643307",
    appId: "1:31303643307:web:22b9b030ac914b2c9687ee"
  }

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
