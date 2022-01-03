import firebase from "firebase/compat/app";
// import * as firebaseui from "firebaseui";
import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";
import { getStorage, ref, uploadString } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAEjefWjeJnACvEFEC4rdEpcjSeB0rRnkg",
  authDomain: "recaps48.firebaseapp.com",
  projectId: "recaps48",
  storageBucket: "recaps48.appspot.com",
  messagingSenderId: "654326712373",
  appId: "1:654326712373:web:c33ffc267955df3ee4897c",
  measurementId: "${config.measurementId}"
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const storage = getStorage(app);
// export const authUI = new firebaseui.auth.AuthUI(auth);

export default firebase;
