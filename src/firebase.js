import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCeJYgxmnUyZHOqgf8yC-BREQ7ORN1gNN4",
  authDomain: "clone-aff23.firebaseapp.com",
  databaseURL: "https://clone-aff23.firebaseio.com",
  projectId: "clone-aff23",
  storageBucket: "clone-aff23.appspot.com",
  messagingSenderId: "833505447850",
  appId: "1:833505447850:web:b781593f9f45db933225d3",
  measurementId: "G-J2EL1XZM7E"
  });

const auth = firebaseApp.auth();
export { auth };