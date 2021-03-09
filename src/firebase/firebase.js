firebaseConfig = {
    apiKey: "AIzaSyBqLdKaS_sz3mFga0cw_10ltMVIxBQOEZ4",
    authDomain: "testumgebung-6eb9d.firebaseapp.com",
    projectId: "testumgebung-6eb9d",
    storageBucket: "testumgebung-6eb9d.appspot.com",
    messagingSenderId: "324794393827",
    appId: "1:324794393827:web:7cdce89f6da22ef02651d6",
    measurementId: "G-B52LTFD60W"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    //var dbRef = firebase.database().ref().child("quiz_frage")
    //dbRef.on('value', snap => textOne.innerText = snap.val())
    firebase.database().ref('0/').once("value").then(function(snapshort) {
        var question=snapshort.val().question;
        var id = snapshort.val().id;
    });

    firebase.database().ref('0/answers').once("value").then(function(snapshort) {
        var answer_1=snapshort.val().a;
        var answer_2=snapshort.val().b;
        var answer_3=snapshort.val().c;
        var answer_4=snapshort.val().d;
    });