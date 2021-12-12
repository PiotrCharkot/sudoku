import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDG2aotT1wmCHV0yaM7rCBAJwRWmyB9kY",
  authDomain: "sudoku-f0533.firebaseapp.com",
  projectId: "sudoku-f0533",
  storageBucket: "sudoku-f0533.appspot.com",
  messagingSenderId: "939443974490",
  appId: "1:939443974490:web:9c3b4b134694d848fc0363",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
