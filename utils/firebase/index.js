import firebase from "firebase";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
    apiKey: "AIzaSyAEjefWjeJnACvEFEC4rdEpcjSeB0rRnkg",
    authDomain: "recaps48.firebaseapp.com",
    projectId: "recaps48",
    storageBucket: "recaps48.appspot.com",
    messagingSenderId: "654326712373",
    appId: "1:654326712373:web:c33ffc267955df3ee4897c",
    measurementId: "${config.measurementId}"
  };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const authUI = new firebaseui.auth.AuthUI(auth);

export default firebase;
