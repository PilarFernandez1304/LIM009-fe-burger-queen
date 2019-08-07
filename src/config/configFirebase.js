import firebase from 'firebase/app';
import 'firebase/firestore';

const config={
    apiKey: "AIzaSyDvJuJEeAqKo1RhCyIkRWiXsf5ocBWVMBk",
    authDomain: "burger-queen-713a8.firebaseapp.com",
    projectId: "burger-queen-713a8",
    storageBucket: "burger-queen-713a8.appspot.com",
    messagingSenderId: "400486886838",
    appId: "1:400486886838:web:130c803342406bf5"
  };

  firebase.initializeApp(config);

  let db=firebase.firestore();
  
//db.settings({timestampsInSnapshots:true})

  export default db;