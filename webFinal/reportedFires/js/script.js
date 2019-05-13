var config = {
    apiKey: "AIzaSyBy7ogJl6cdNGKs-wmysbZZXyVM06rwiTE",
    authDomain: "web-final-92ad6.firebaseapp.com",
    databaseURL: "https://web-final-92ad6.firebaseio.com",
    projectId: "web-final-92ad6",
    storageBucket: "",
    messagingSenderId: "2702054114"
  };
  firebase.initializeApp(config);

  //get DB instance
  var database = firebase.database();

  var firesRef = database.ref("fires");

$(document).ready(function(){
    getInfo();
})
function getInfo(){
    return firebase.database().ref(firesRef).once('value').then(function(snapshot) {
        console.log(snapshot.val());
        for(item in snapshot.val()){
            var fbName = snapshot.val()[item].name;
            var fbEmail = snapshot.val()[item].email;
            var fbPhone = snapshot.val()[item].phone;
            var fbLocation = snapshot.val()[item].location;
            var fbDesc = snapshot.val()[item].description;
            console.log(fbName);

            $("#firesGrid").append("<div class='fireItem'><h1>" + fbName + "<h1>" + fbEmail 
            + "<h1>" + fbPhone + "<h1>" + fbLocation + "<h1>" + fbDesc);
        }
      });
  }

  $("#homeBtn").click(function(){
    console.log("report pressed");
   window.location.href = "../index.html";
});

$("#reportPageBtn").click(function(){
   console.log("report pressed");
  window.location.href = "../reportFire/report.html";
});