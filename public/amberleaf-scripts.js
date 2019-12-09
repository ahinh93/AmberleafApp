/**
 * Written by Andrew Hinh
*/

// function saveData() {
//     var
//     var fname = document.getElementById('first-name').value;
//     var lname = document.getElementById('last-name').value;
//     alert("write to 1");
//     let docRef = db.collection('users').doc('alovelace');
//     alert("write to 2");
//     let setAda = docRef.set({
//         first: 'Ada',
//         last: 'Lovelace',
//         born: 1815
//     });
//     alert("write to 3");
// }
// function retrieveDatabase() {
//     alert("retrieve 1")
//     var db = admin.database();
//     alert("retrieve 2");
//     var ref = db.ref("projectData/server");
//     alert("retrieve 3");
//     ref.on("value", function (snapshot) {
//         document.getElementById("dataText").innerHTML = "yes";
//     }, function (errorObject) {
//         document.getElementById("dataText").innerHTML = "error";
//     });
// }

function clearTextBox() {
    document.getElementById("dataText").innerHTML = "";
}

function testVariable() {
    alert("hi");
    document.location.href = "./testVariable.html";
}

function writeToDatabase(){
    if (typeof firebase !== 'undefined') {
        // the variable is defined
        alert("firebase defined");
    }
    else
        alert("firebase undefined");
}