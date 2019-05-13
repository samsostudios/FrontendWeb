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
var budgetRef = database.ref("budget");

var mBudgetVal = document.getElementById("monthInput");
var fBudgetVal = document.getElementById("foodInput");
var rBudgetVal = document.getElementById("rentInput");
var tBudgetVal = document.getElementById("travelInput");

var month;
var monthVal = new Date().getMonth();
switch (monthVal) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
  default:

}



var saveInfoBtn = document.getElementById("saveBudgetInfo");
saveInfoBtn.addEventListener("click", function(){
  mVal = mBudgetVal.value;
  fVal = fBudgetVal.value
  rVal = rBudgetVal.value;
  tVal = tBudgetVal.value;
  var user = firebase.auth().currentUser;
  var uid = user.uid

  budgetRef.child(uid + '/' + month).set({
    monthBudget: mVal,
    foodBudget: fVal,
    rentBudget: rVal,
    travelBudget: tVal
  });

  window.location.href = "../home/home.html";
});

firebase.auth().onAuthStateChanged(function(user) {
  current_user = user;
	if (user) {
    $(".welcomeTxt").append("<h1> Welcome, " + user.email + "!");
    $(".welcomeTxt").append("<h1> Lets get started by setting budget amounts!")
		} else {
      console.log("logged out");
  	}
});
