import firebase from "firebase";

const firebaseConfig =firebase.initializeApp({
    apiKey: "AIzaSyC2VXgv_yDgv3OFB2HGI-FZ15OWGAO8HJ4",
    authDomain: "fb-clone-14538.firebaseapp.com",
    projectId: "fb-clone-14538",
    storageBucket: "fb-clone-14538.appspot.com",
    messagingSenderId: "578184188754",
    appId: "1:578184188754:web:2e9089ee52627050b7608b"
  });


  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();


const db= firebaseConfig.firestore();
const storage =firebase.storage()

  export {auth,provider,db,storage}