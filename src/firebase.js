/* import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsVQMlulhYbLSyp8fnGWRg5rbDDOaNiAo",
  authDomain: "clone-5c6bd.firebaseapp.com",
  projectId: "clone-5c6bd",
  storageBucket: "clone-5c6bd.appspot.com",
  messagingSenderId: "179656867192",
  appId: "1:179656867192:web:625db151540c9033391c8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
 */
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsVQMlulhYbLSyp8fnGWRg5rbDDOaNiAo",
  authDomain: "clone-5c6bd.firebaseapp.com",
  projectId: "clone-5c6bd",
  storageBucket: "clone-5c6bd.appspot.com",
  messagingSenderId: "179656867192",
  appId: "1:179656867192:web:625db151540c9033391c8d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
