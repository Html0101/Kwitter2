var firebaseConfig = {
    apiKey: "AIzaSyAYLM61RYv5MUDBSnSgwwLZHi8HM8KlvSs",
    authDomain: "kwitter-2065a.firebaseapp.com",
    databaseURL: "https://kwitter-2065a-default-rtdb.firebaseio.com",
    projectId: "kwitter-2065a",
    storageBucket: "kwitter-2065a.appspot.com",
    messagingSenderId: "29395929077",
    appId: "1:29395929077:web:f98dc273078bd0833dc2bc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() 
{ 
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
