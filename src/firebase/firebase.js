import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
   apiKey: "AIzaSyD98bglEOJ2zyYKbUW6XVADOhM8WtksW90",
   authDomain: "thirukural-pwa.firebaseapp.com",
   databaseURL: "https://thirukural-pwa.firebaseio.com",
   projectId: "thirukural-pwa",
   storageBucket: "thirukural-pwa.appspot.com",
   messagingSenderId: "66332016388"
};

const devConfig = {
   apiKey: "AIzaSyD98bglEOJ2zyYKbUW6XVADOhM8WtksW90",
    authDomain: "thirukural-pwa.firebaseapp.com",
    databaseURL: "https://thirukural-pwa.firebaseio.com",
    projectId: "thirukural-pwa",
    storageBucket: "thirukural-pwa.appspot.com",
    messagingSenderId: "66332016388"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth
};
