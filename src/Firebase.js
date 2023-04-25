import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCmrxmWEBKlgs-WX4gdbyFsYHY7fW9pJNY",
  authDomain: "pucpr02-14923.firebaseapp.com",
  projectId: "pucpr02-14923",
  storageBucket: "pucpr02-14923.appspot.com",
  messagingSenderId: "628142594771",
  appId: "1:628142594771:web:a01b687a06dc3d328d9226"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;