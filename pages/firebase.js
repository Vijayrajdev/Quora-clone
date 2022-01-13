
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnjg_gXSsJL0w6NC7zXBc6cdM0alorOSU",
  authDomain: "quora-clone-vj.firebaseapp.com",
  projectId: "quora-clone-vj",
  storageBucket: "quora-clone-vj.appspot.com",
  messagingSenderId: "321780331905",
  appId: "1:321780331905:web:5ba782eedfcf2b5aaa2480",
  measurementId: "G-EZ5BFPE4NJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
