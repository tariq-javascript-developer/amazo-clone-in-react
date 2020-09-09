import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDqlxI5wdNuWr4kbG6D5E7pLqLyB_xniwE",
  authDomain: "clone-7259a.firebaseapp.com",
  databaseURL: "https://clone-7259a.firebaseio.com",
  projectId: "clone-7259a",
  storageBucket: "clone-7259a.appspot.com",
  messagingSenderId: "885494446339",
  appId: "1:885494446339:web:2d5a7a63bd536b765e9136",
  measurementId: "G-03GJSK3WFS"
  });

const auth = firebase.auth();
export { auth };