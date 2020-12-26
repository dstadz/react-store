import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDC700gKS41mGVi0h0pdwZcCkFQp0gczm4",
  authDomain: "store-front-4051f.firebaseapp.com",
  projectId: "store-front-4051f",
  storageBucket: "store-front-4051f.appspot.com",
  messagingSenderId: "247149011243",
  appId: "1:247149011243:web:c688d8d2182d10ee69656e",
  measurementId: "G-9YN9TC98ZY"
};

firebase.initializeApp(config);

//sign up
export const createUserProfileDocument = async (userAuth: any, additionalData?: any) => {
  // console.log(userAuth, additionalData)
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // console.log('snapShot', snapShot)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionandItems = async (collectionKey: string, objectsToAdd: {}[]) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  });
  return await batch.commit()
}


export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection
  // return transformedCollection.reduce((accumulator, collection) => {
  //   accumulator[collection.title.toLowerCase()] = collection;
  //   return accumulator;
  // }, {});
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
