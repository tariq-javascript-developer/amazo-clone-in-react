import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCitZo4jIxkeJ9AiM0EayPuP2QiuLK5vIc",
  authDomain: "fir-b5c03.firebaseapp.com",
  databaseURL: "https://fir-b5c03.firebaseio.com",
  projectId: "fir-b5c03",
  storageBucket: "fir-b5c03.appspot.com",
  messagingSenderId: "773406913647",
  appId: "1:773406913647:web:35b9ea08aeef05a7e1899a",
  measurementId: "G-HK6ZEFJRHJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
