import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCAW-gaiVQzW9n2UPWz5MY69Lr_gUa4E3s",
  authDomain: "crwn-db-35677.firebaseapp.com",
  databaseURL: "https://crwn-db-35677.firebaseio.com",
  projectId: "crwn-db-35677",
  storageBucket: "crwn-db-35677.appspot.com",
  messagingSenderId: "853228513124",
  appId: "1:853228513124:web:528ff8ca9d24f203d8fc71",
  measurementId: "G-EY21QMP92M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;