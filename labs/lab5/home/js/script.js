var config = {
  apiKey: "AIzaSyB3xJrahGksYv3GyEus_1Db6S9_6MQwqaI",
  authDomain: "budget-right-208c0.firebaseapp.com",
  databaseURL: "https://budget-right-208c0.firebaseio.com",
  projectId: "budget-right-208c0",
  storageBucket: "budget-right-208c0.appspot.com",
  messagingSenderId: "984200840046"
};
firebase.initializeApp(config);

// Get a reference to the database
var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // console.log(user);
    if(user.name == null){
      $(".textArea").append("<h1> Welcome, " + user.email + "!");
    }else{
      $(".textArea").append("<h1> Welcome, " + user.displayName + "!");
    }

    $(".textArea").append("<h1> We will be launching soon, Please check back!");
  } else {
    window.location.href = "../index.html";
  }
});

var soBtn = document.getElementById("logOutBtn");
soBtn.addEventListener("click", signOut);

function signOut(){
  firebase.auth().signOut().then(function() {
  currentUser == null;
}).catch(function(error) {
  // An error happened.
  console.log("not logged out");
});
}
