import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC5GWRr6doCnC5aUPs5gockZtyJMufpiTI',
  authDomain: 'crwn-clothing-db-4347b.firebaseapp.com',
  projectId: 'crwn-clothing-db-4347b',
  storageBucket: 'crwn-clothing-db-4347b.appspot.com',
  messagingSenderId: '127162022663',
  appId: '1:127162022663:web:ac3f4b14a4528efe7be3a2',
  measurementId: 'G-39TWLNS9FX'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
