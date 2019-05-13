// Initialize Firebase
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

  var provider = new firebase.auth.GoogleAuthProvider();

  var firesRef = database.ref("fires");

  $("#enter").click(function(){
      console.log("submitted!");

      var inputName = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var affectedYes = $("#caught_yes:checked").val();
      var affectedNo = $("#caught_no:checked").val();
      var location = $("#location").val();
      var description = $("#description").val();

      firesRef.push({
          name: inputName,
          email: email,
          phone: phone,
          location: location,
          description: description
      });
  })
  $("#reportedPageBtn").click(function(){
    console.log("report pressed");
    window.location.href = "../reportedFires/reported.html";
});

$("#homeBtn").click(function(){
   console.log("report pressed");
    window.location.href = "../index.html";
});
