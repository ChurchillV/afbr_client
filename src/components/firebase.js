import { initializeApp } from "firebase/app";
import axios from 'axios';

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut

} from 'firebase/auth';
import { url } from "./weburl";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVkfW8FXIyiuoL90DGaqqFgEyW6mM57Ac",
  authDomain: "afbr-80930.firebaseapp.com",
  projectId: "afbr-80930",
  storageBucket: "afbr-80930.appspot.com",
  messagingSenderId: "905105460514",
  appId: "1:905105460514:web:a9c22a1e64ce7c2c63a97b",
  measurementId: "G-TXC9MJ6FVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,


      });

      await axios
        .post(`${url}api/users`, { uid: user.uid, username: user.displayName, email: user.email })
        .then((res) => console.log('success', res))
        .catch((err) => console.log(err))

      await axios
        .post(`${url}api/email/email_register`, { uid: user.uid, username: user.displayName, email: user.email })
        .then((res) => console.log('successfully sent email', res))
        .catch((err) => console.log(err))
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    axios
      .post(`${url}api/users`, { uid: user.uid, username: name, email: email })
      .then((res) => console.log('success', res))
      .catch((err) => console.log(err))

      await axios
      .post(`${url}api/email/email_register`, { uid: user.uid, username: user.displayName, email: user.email })
      .then((res) => console.log('successfully sent email', res))
      .catch((err) => console.log(err))
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};