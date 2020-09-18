import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgxKddCJ6DhJ7Xk6G3gwd5xiVKwKQZDLk",
  authDomain: "clone-aws.firebaseapp.com",
  databaseURL: "https://clone-aws.firebaseio.com",
  projectId: "clone-aws",
  storageBucket: "clone-aws.appspot.com",
  messagingSenderId: "619109055289",
  appId: "1:619109055289:web:9b34e13d04881e4ff086e8",
  measurementId: "G-MR4NVQKQBD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
