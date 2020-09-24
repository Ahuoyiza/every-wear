import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4_YR8LnfAkVEUSTTOKfzanlMwbwyDi1g",
  authDomain: "every-wear.firebaseapp.com",
  databaseURL: "https://every-wear.firebaseio.com",
  projectId: "every-wear",
  storageBucket: "every-wear.appspot.com",
  messagingSenderId: "39796393533",
  appId: "1:39796393533:web:8efafb702fd4e81f3a0c54",
  measurementId: "G-B9XRD29ZR2",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
