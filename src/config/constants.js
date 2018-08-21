import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Required for side-effects
require('firebase/firestore');


 const config = {
  apiKey: "AIzaSyBAqLRNNsxi3Z-ZqFviXX5CaeMZfZJoqqQ",
    authDomain: "mypost-6b27e.firebaseapp.com",
    databaseURL: "https://mypost-6b27e.firebaseio.com",
    projectId: "mypost-6b27e",
    storageBucket: "mypost-6b27e.appspot.com",
    messagingSenderId: "152530251602"
};

export const base= firebase.initializeApp(config);


const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/dashboard',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  
};
//export const config;
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
export const firebaseUI = uiConfig;
