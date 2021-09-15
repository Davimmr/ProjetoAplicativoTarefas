import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDryzlNCDQSNi6k9csD_gXbL5iUftzcEP8",
    authDomain: "projeto-tio.firebaseapp.com",
    databaseURL: "https://projeto-tio.firebaseio.com",
    projectId: "projeto-tio",
    storageBucket: "projeto-tio.appspot.com",
    messagingSenderId: "19601559786"
};
firebase.initializeApp(config);

export default firebase;