
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  signOut as _signOut,
  onAuthStateChanged as _onAuthStateChanged,
  User
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_BphB1fO2_g24Jj_SRtFAXBxUwK2OIzI",  // This is a demo key, replace with your Firebase API key
  authDomain: "vaultflow-demo.firebaseapp.com",
  projectId: "vaultflow-demo",
  storageBucket: "vaultflow-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:123456789abcdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth methods
const createUserWithEmailAndPassword = _createUserWithEmailAndPassword;
const signInWithEmailAndPassword = _signInWithEmailAndPassword;
const signOut = _signOut;
const onAuthStateChanged = _onAuthStateChanged;

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
};
