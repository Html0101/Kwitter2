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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}