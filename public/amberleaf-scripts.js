/**
 * Written by Andrew Hinh
*/

// Firebase configuration
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
firebase.analytics();

var admin = require('firebase-admin');


function saveData() {
    var fname = document.getElementById('first-name').value;
    var lname = document.getElementById('last-name').value;
    writeUserData(fname, lname);
}
function writeUserData(fname, lname) {
    alert("write to 1");
    //create reference to database service
    alert(typeof firebase);
    var database = firebase.database().ref("projectData/server");
    alert("write to 2");

    var usersRef = database.child("server");

    alert("write to 3");
    usersRef.set({
        alanisawesome: {
            date_of_birth: "June 23, 1912",
            full_name: "Alan Turing"
        },
        gracehop: {
            date_of_birth: "December 9, 1906",
            full_name: "Grace Hopper"
        }
    });
    alert("write to 4");
    // alert("done");
}
function retrieveDatabase() {
    alert("retrieve 1")
    var db = admin.database();
    alert("retrieve 2");
    var ref = db.ref("projectData/server");
    alert("retrieve 3");
    ref.on("value",function(snapshot){
        document.getElementById("dataText").innerHTML = "yes";
    }, function (errorObject) {
        document.getElementById("dataText").innerHTML = "error";
    });
}

function clearTextBox() {
    document.getElementById("dataText").innerHTML = "";
}