import firebase from "firebase";

import "firebase/firestore";
import "firebase/functions";

var firebaseConfig = {
  apiKey: "AIzaSyAKdB-0xqgUAiI84RhshWg-FvYbrzWIVg4",
  authDomain: "bootcamp-stage3-practice.firebaseapp.com",
  projectId: "bootcamp-stage3-practice",
  storageBucket: "bootcamp-stage3-practice.appspot.com",
  messagingSenderId: "610093915733",
  appId: "1:610093915733:web:e8d83a81dce051275cbedc",
  measurementId: "G-WRMY2RHN9N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const functions = firebase.functions();
