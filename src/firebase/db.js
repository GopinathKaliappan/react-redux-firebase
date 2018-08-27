import { db } from './firebase';
import firebase from 'firebase';
import addWorks from '../actions/add_works';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');


export const addWork = (name, price, doc)  => {
      alert(name)
      var postData = {
        name,
        price
      };

      firebase.firestore().collection("works").doc(doc).set(postData)
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });   
}

export const getWorks = (callback) => {

 firebase.firestore().collection('works').get()
    .then((snapshot) => {
    	let list = [];
      snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
        list.push(doc.data());
      });
      addWorks(list);
      callback(list);
      return list;
      
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}
// Other db APIs ...
