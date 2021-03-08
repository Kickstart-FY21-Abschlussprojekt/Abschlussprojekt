
var mainText = document.getElementById("mainText");
var submit_btn = document.getElementById("submit_btn");

function submitClick() {
    var ref = firbase.database().ref("Text");
    var rootRef = ref.child('graduate');

    //firebaseRef.child("Text").set("Some Value");
}