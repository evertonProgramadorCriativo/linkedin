import firabase from "firabase"

const firebaseConfig = {
    apiKey: " ",
    authDomain: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " "
  };

  // Initialize Firebase
const firebaseApp = firabase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firabase.auth();
const provider = new  firabase.auth.GoogleAuthProvider();
const storage = firabase.storage();

export {auth, provider, storage };
export default db;