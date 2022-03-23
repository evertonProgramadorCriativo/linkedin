import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
 
 

 
const firebaseConfig = {
  apiKey : "AIzaSyDk0FMdQ8y_JtnpbgrI22mXnLKk9To44RY" ,
  authDomain : "linkedin-d95f2.firebaseapp.com" ,
  projectId : "linkedin-d95f2" ,
  storageBucket : "linkedin-d95f2.appspot.com" ,
  messagingSenderId : "251965596526" ,
  appId : "1:251965596526:web:ad77e7805ab5565f2b177f"
   
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new  firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();
 
   

 
 

export { auth, provider, storage}
export default db;