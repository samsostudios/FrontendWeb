// Initialize Firebase
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

//Google Authentication
var userRef = database.ref("users");

var provider = new firebase.auth.GoogleAuthProvider();

var user_info = document.getElementById("userStatus");

var current_user = null;

var gSignIn = document.getElementById("googleSignIn");
gSignIn.addEventListener("click", authenticate);

function authenticate() {
  console.log("In authenticate");
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

//Email Password Sign In
var emailTxt = document.getElementById("emailInput");
var passwordTxt = document.getElementById("passInput");

var liBtn = document.getElementById("logInBtn");
var suBtn = document.getElementById("signUpBtn");

liBtn. addEventListener("click", function(){
  var email = emailTxt.value;
  var password = passwordTxt.value;
  var auth = firebase.auth();

  var promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));
});

suBtn.addEventListener("click", function(){
  var email = emailTxt.value;
  var password = passwordTxt.value;
  var auth = firebase.auth();

  var promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));

});

firebase.auth().onAuthStateChanged(function(user) {
  console.log("In state changed");
  // console.log(user.uid);
  var email = emailTxt.value;
  current_user = user;
	if (user) {
    console.log("logged in");
    userRef.child(user.uid).set({
      email: user.email
    });
    window.location.href = "../setBudget/index.html";

		} else {
      console.log("logged out");
    	// No user is signed in
  	}
});
