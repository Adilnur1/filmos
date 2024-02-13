import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBB-KXb0_1zSVB7p82JJJAkXoi3-VaXg3g",
  authDomain: "shop-646a7.firebaseapp.com",
  projectId: "shop-646a7",
  storageBucket: "shop-646a7.appspot.com",
  messagingSenderId: "268403512153",
  appId: "1:268403512153:web:e48a97de87dbf49055f248",
  measurementId: "G-CSG057YLMF",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
