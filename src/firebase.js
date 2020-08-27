import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCs4CFVImcUleEWQsI9GN_U0vUzQjGX6fQ",
    authDomain: "slack-clone-83148.firebaseapp.com",
    databaseURL: "https://slack-clone-83148.firebaseio.com",
    projectId: "slack-clone-83148",
    storageBucket: "slack-clone-83148.appspot.com",
    messagingSenderId: "323230270416",
    appId: "1:323230270416:web:63b39a61db5d916c0fefd5",
    measurementId: "G-T9CNNZF8TX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;