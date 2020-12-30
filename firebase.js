import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCLAONmPinysmhdK3_bSmKKK8pEPCrB0GQ",
    authDomain: "recipeapp-8439e.firebaseapp.com",
    databaseURL: "https://recipeapp-8439e-default-rtdb.firebaseio.com",
    projectId: "recipeapp-8439e",
    storageBucket: "recipeapp-8439e.appspot.com",
    messagingSenderId: "754370168887",
    appId: "1:754370168887:web:fad6571590d4f15a17d7b2",
    measurementId: "G-4Z9E76TPC3"
};


firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

export {
    database as default
}
