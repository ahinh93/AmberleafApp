
// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
  apiKey: "AIzaSyD47NOjIbQYeNZtwbIEqTNfRZSDmAp1E14",
  authDomain: "amberleaf-app.firebaseapp.com",
  databaseURL: "https://amberleaf-app.firebaseio.com",
  projectId: "amberleaf-app",
  storageBucket: "amberleaf-app.appspot.com",
  messagingSenderId: "522203017902",
  appId: "1:522203017902:web:1b9fab7ae49d0670d0b33f",
  measurementId: "G-HYLXXYF545"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


function writeToDatabase() {

  if (typeof database !== 'undefined') {
    console.log("input:" + document.getElementById('myInput').value);
    database.ref('object/').set(document.getElementById('myInput').value);

  }
  else
    console.log("database undefined");
}
function listenToDatabase() {
  const preObject = document.getElementById('object');

  //create references
  const dbRefObject = firebase.database().ref().child('object');

  //sync object changes
  dbRefObject.on('value', snap => console.log(snap.val()));
}