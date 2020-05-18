import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDyEImOx_JxPCt0Wv6rOUks-vH7YQpnYbg",
  authDomain: "crwn-final.firebaseapp.com",
  databaseURL: "https://crwn-final.firebaseio.com",
  projectId: "crwn-final",
  storageBucket: "crwn-final.appspot.com",
  messagingSenderId: "1006952483688",
  appId: "1:1006952483688:web:81bd68989994bad62be4dd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
