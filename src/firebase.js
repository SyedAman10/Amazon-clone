// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCaXYisoS5l7gRs7GS55BlBB8pkwgKHqIA",
    authDomain: "clone-9fffb.firebaseapp.com",
    databaseURL: "https://clone-9fffb.firebaseio.com",
    projectId: "clone-9fffb",
    storageBucket: "clone-9fffb.appspot.com",
    messagingSenderId: "651928786185",
    appId: "1:651928786185:web:611aacfd17d21f12e7afd8",
    measurementId: "G-MZM5SK42YS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth};