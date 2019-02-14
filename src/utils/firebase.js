import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBlRNY-GqpKBBBPP9O_R6pl9iQyyJjIFIA",
    authDomain: "people-s-geography-of-seattle.firebaseapp.com",
    databaseURL: "https://people-s-geography-of-seattle.firebaseio.com",
    projectId: "people-s-geography-of-seattle",
    storageBucket: "people-s-geography-of-seattle.appspot.com",
    messagingSenderId: "960345994076"
};

const store = firebase.initializeApp(config);

export default store;