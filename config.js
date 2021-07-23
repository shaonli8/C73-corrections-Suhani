import * as firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDdE6BnRim2W3aDzy5Nt0nmZM6rWo2eG8Q",
  authDomain: "story-hub-ee3f4.firebaseapp.com",
  projectId: "story-hub-ee3f4",
  storageBucket: "story-hub-ee3f4.appspot.com",
  messagingSenderId: "76015059471",
  appId: "1:76015059471:web:105717073e625e2016997a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();