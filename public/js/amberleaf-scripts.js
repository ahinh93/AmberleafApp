/**
 * Written by Andrew Hinh
*/

function writeToDatabase() {

    if (typeof database !== 'undefined') {
        var temp = document.getElementById('myInput').value;
        database.ref('object/').set(temp);
        console.log("object/"+temp);
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