import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "store-front-4051f.firebaseapp.com",
  projectId: "store-front-4051f",
  storageBucket: "store-front-4051f.appspot.com",
  messagingSenderId: "247149011243",
  appId: process.env.REACT_APP_API_ID,
  measurementId: "G-9YN9TC98ZY"
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
