import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBVobyibtZTIuemSit_b4405RpEeQLIREk",
  authDomain: "aps-rn-firebase.firebaseapp.com",
  projectId: "aps-rn-firebase",
  storageBucket: "aps-rn-firebase.appspot.com",
  messagingSenderId: "571755489959",
  appId: "1:571755489959:web:baf5c251ba7441fddd8982",
  measurementId: "G-P9TBLNK5JL"
};
// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;