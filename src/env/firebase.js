import firebase from 'firebase';
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyDKJVbtU6nP3btO6g5CHdtAkPj4TBBEfok",
    authDomain: "balon-d-or-serverless-tp.firebaseapp.com",
    projectId: "balon-d-or-serverless-tp",
    storageBucket: "balon-d-or-serverless-tp.appspot.com",
    messagingSenderId: "514471093317",
    appId: "1:514471093317:web:2d5bcd086724bf593f6f2c",
    measurementId: "G-WSQMD5KDTH"
  };
const app = firebase.initializeApp(firebaseConfig)
export default app ;
