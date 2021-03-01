
import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2Po6hAjitdSinUP02oGZoilRyYjItzxY",
    authDomain: "clone-87ff0.firebaseapp.com",
    databaseURL: "https://clone-87ff0.firebaseio.com",
    projectId: "clone-87ff0",
    storageBucket: "clone-87ff0.appspot.com",
    messagingSenderId: "784203962586",
    appId: "1:784203962586:web:50f654dc79ec850ace6de3",
    measurementId: "G-4QCVMEQ87E"
  };

  // Inittialize app
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // Initialize database
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}