import firebase from "firebase/app";
import 'firebase/auth'
import Firestore from 'firebase/firestore';

if (!firebase.apps.length) {
  //  if (firebase) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase