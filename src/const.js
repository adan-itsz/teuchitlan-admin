
import * as firebase from 'firebase';
var config = {
   apiKey: "AIzaSyAg51jVppPxKir5CEk8ppeRUZ281KCj4QU",
   authDomain: "teuchiapp.firebaseapp.com",
   databaseURL: "https://teuchiapp.firebaseio.com",
   projectId: "teuchiapp",
   storageBucket: "teuchiapp.appspot.com",
   messagingSenderId: "414119040432"
 };
 firebase.initializeApp(config);
  export const ref = firebase.database().ref();
