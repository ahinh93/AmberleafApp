/**
 * Written by Andrew Hinh
*/

function writeToDatabase() {

    if (typeof database !== 'undefined') {
        database.ref('object/').set(document.getElementById('myInput'));

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