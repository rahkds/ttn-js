// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver
} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc, collection, writeBatch,  query, getDocs, QueryDocumentSnapshot} from 'firebase/firestore';
import {Category} from "../../store/categories/category.types";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwcfi8D1DZXfbsnOta4WlRGv_tAeJdIqo",
  authDomain: "crwn-clothing-rahul-db.firebaseapp.com",
  projectId: "crwn-clothing-rahul-db",
  storageBucket: "crwn-clothing-rahul-db.appspot.com",
  messagingSenderId: "1087548506987",
  appId: "1:1087548506987:web:bb542df38d81d31c04422e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export type ObjectToAdd = {title : string};

export const addCollectionAndDocuments = async<T extends ObjectToAdd>(collectionKey : string, objectsToAdd : T[]) : Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done')
}

export const getCategoriesAndDocuments = async () : Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category);
  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  // console.log("data ==== ", categoryMap);
  // return categoryMap;
};

export type AdditionalInformation = {
  displayName? : string
}

export type UserData = {
  createAt : Date,
  displayName : string,
  email  : string
}

export const createUserDocumentFromAuth = async (userAuth : User, additionalInformation = {} as AdditionalInformation) : Promise<void | QueryDocumentSnapshot<UserData>> => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating the user', error);
      }
    }
  
    return userSnapshot as QueryDocumentSnapshot<UserData>;
  };

  export const createAuthUserWithEmailAndPassword = async (email:string, password: string) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };


  export const signOutUser = () => signOut(auth);

  export const onAuthStateChangedListener  = (callback : NextOrObserver<User>) => onAuthStateChanged(auth, callback);


  export const getCurrentUser = () :Promise<User | null>=> {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (userAuth) => {
          unsubscribe();
          resolve(userAuth);
        },
        reject
      )
    });
  }