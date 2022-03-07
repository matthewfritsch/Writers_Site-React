import firebase from "firebase/app";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaTTkV_mPImeiThsbL3drx7UXH9wBwAHo",
  authDomain: "matthew-fritsch-writer-page.firebaseapp.com",
  projectId: "matthew-fritsch-writer-page",
  storageBucket: "matthew-fritsch-writer-page.appspot.com",
  messagingSenderId: "135122505491",
  appId: "1:135122505491:web:b866cb1610c098bc2194e6",
});
export const auth = firebaseApp.auth();
export default firebaseApp;
