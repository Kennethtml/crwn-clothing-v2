import {initializeApp} from 'firebase/app';
import{getAuth,signInWithPopup,signInWithRedirect, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword}from 'firebase/auth'
import{getFirestore,doc,getDoc,getDocs, setDoc,collection,writeBatch,query} from 'firebase/firestore'
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { async } from '@firebase/util';

const firebaseConfig = {
  apiKey: "AIzaSyC9eaX7SlxH98nQoqvT13XkxtOEq8LryBY",
  authDomain: "crwn-clothing-db-d4b55.firebaseapp.com",
  projectId: "crwn-clothing-db-d4b55",
  storageBucket: "crwn-clothing-db-d4b55.appspot.com",
  messagingSenderId: "1008444504076",
  appId: "1:1008444504076:web:4d74bc16ff737ab1a05629"
};


const firebaseApp = initializeApp(firebaseConfig); 

const provider= new GoogleAuthProvider(); //gives provider instance
provider.setCustomParameters({
    prompt:"select_account"
});

//setcustomparameters are for authentification providers and is specifically for Google's own interface

export const auth= getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);
export const signInwithGoogleRedirect=()=>signInWithRedirect(auth,provider)
export const createAuthUserWithEmailandPassword= async(email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailandPassword= async(email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)
}
export const signOutAuthUser=async()=> {await signOut(auth)}
export const onAuthStateChangedlistener=(callback)=>{ onAuthStateChanged(auth,callback)}
export const db= getFirestore()

export const createUserDocumentFromAuth= async(userAuth,additionalInformation={})=>{

    const userDocRef =doc(db,'users', userAuth.uid)

    const userSnapShot= await getDoc(userDocRef)

    if(!userSnapShot.exists()){
      const{displayName, email}=userAuth;
      const createdAt= new Date()
      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
      }
      catch(error){
          console.log('error creating user', error.message)
        }
    }
}
//helper function to add our items to the data base
export const addCollectionandDocuments=async(collectionKey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey)
  console.log('colectionRef',collectionRef)

  //instantiate a batch
  const batch=writeBatch(db);
  console.log('batch',batch)
  objectsToAdd.forEach((object)=>{
    const docRef=doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)

  })
  await batch.commit()
  console.log('done')
}

//helper function to get our items from our firestore database
export const getCategoriesandDocument=async()=>{

  const colectionRef=collection(db,'categories');
  const q=query(colectionRef);
  
  const querySnapshot=await getDocs(q)

  const categoryMap=querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const{title,items}=docSnapshot.data();
    acc[title.toLowerCase()]=items;
    return acc;
  },{})

  return categoryMap

}
