import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXoUB7oOiWp0QxfSdQIrj4-LNV8h_GbuY",
  authDomain: "linkedinclone-project-a9647.firebaseapp.com",
  projectId: "linkedinclone-project-a9647",
  storageBucket: "linkedinclone-project-a9647.firebasestorage.app",
  messagingSenderId: "849133375729",
  appId: "1:849133375729:web:f9612c4cfac1f3f9375950",
  measurementId: "G-974HTGEESX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
