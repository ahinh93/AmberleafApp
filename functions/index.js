const functions = require('firebase-functions');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://amberleaf-app.firebaseio.com'
  });

// Initialize the default app
var admin = require('firebase-admin');
var app = admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
