import firabase from "firabase"

const firebaseConfig = {
    apiKey: "AIzaSyDk0FMdQ8y_JtnpbgrI22mXnLKk9To44RY",
    authDomain: "linkedin-d95f2.firebaseapp.com",
    projectId: "linkedin-d95f2",
    storageBucket: "linkedin-d95f2.appspot.com",
    messagingSenderId: "251965596526",
    appId: "1:251965596526:web:ad77e7805ab5565f2b177f"
  };

  // Initialize Firebase
const firebaseApp = firabase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firabase.auth();
const provider = new  firabase.auth.GoogleAuthProvider();
const storage = firabase.storage();

export {auth, provider, storage };
export default db;