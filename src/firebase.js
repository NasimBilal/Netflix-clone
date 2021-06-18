import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQvfVuV11BqsmcHhuMTpk1BPYKxtJtILc",
    authDomain: "netflix-clone-8af57.firebaseapp.com",
    projectId: "netflix-clone-8af57",
    storageBucket: "netflix-clone-8af57.appspot.com",
    messagingSenderId: "346658831093",
    appId: "1:346658831093:web:194d7d97f350353242a3bc",
    measurementId: "G-5ZD3MJW7RN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
