import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyATpT-RYnSJlSeixNieaArA-AEC233SrX0",
  authDomain: "vue-crud-test1.firebaseapp.com",
  databaseURL: "https://vue-crud-test1.firebaseio.com",
  projectId: "vue-crud-test1",
  storageBucket: "vue-crud-test1.appspot.com",
  messagingSenderId: "918824845671",
  appId: "1:918824845671:web:5e6452c44630a38e3d2fc2",
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
