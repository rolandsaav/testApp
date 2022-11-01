// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfUKVLsZ4XBU8X0P-9HHAGRWaeBauFkm0",
  authDomain: "smallstep-5b691.firebaseapp.com",
  projectId: "smallstep-5b691",
  storageBucket: "smallstep-5b691.appspot.com",
  messagingSenderId: "276942731099",
  appId: "1:276942731099:web:7d5e4bcc68a58197ed0c7e",
  measurementId: "G-LW6HV4PJH4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const imagesRef = ref(storage, 'images');

export {auth, imagesRef};