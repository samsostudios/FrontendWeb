$(document).ready(function(){
});

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

var budgetRef = database.ref("budget/");

var infoArea = document.getElementById("info");
var addBtn = document.getElementById("addItemBtn");
addBtn.addEventListener("click", function(event){
  event.preventDefault();
  console.log("add btn");
  $(".addItemOverlay").css("display", "flex");
});

var closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", function(){
  console.log("close btn");
  $(".addItemOverlay").css("display", "none");
});


firebase.auth().onAuthStateChanged(function(user) {
  current_user = user;
	if (user) {
    getInfo(user);

		} else {
      console.log("logged out");
  	}
});

var mValue;
var fValue;
var rValue;
var tValue;

var fReamin;
var rReamin;
var tReamin;

var foodList = [];
var rentList = [];
var travelList = [];

var itemInput = document.getElementById("addItemInput");
var itemType = document.getElementById("itemType");
var saveItem = document.getElementById("saveItemVal");
saveItem.addEventListener("click", function(){
  var inputVal = itemInput.value;
  var type = itemType.value

  var user = firebase.auth().currentUser;
  var uid = user.uid;
  var budgetRef = database.ref("budget/" + uid + "/November/");
  console.log(budgetRef);

  if(type == "Food"){
    budgetRef.child("foodExpenses").push({
      value: inputVal
    });

    updateInfo(fReamin, "Food");

  }else if(type == "Rent"){
    budgetRef.child("rentExpenses").push({
      value: inputVal
    });

    updateInfo(rReamin, "Rent");

  }else if(type == "Travel"){
    budgetRef.child("travelExpenses").push({
      value: inputVal
    });

    updateInfo(tReamin, "Travel");
  }

  $(".addItemOverlay").css("display", "none");
});

function getInfo(){
  var user = firebase.auth().currentUser
  var uid = user.uid

  $("#welcomeTxt").append("<h1> Hello, " + user.email);
  return firebase.database().ref("budget/" + uid + "/November").once('value').then(function(snapshot) {
    console.log(snapshot.val());
    mValue = snapshot.val().monthBudget;
    fValue = snapshot.val().foodBudget;
    rValue = snapshot.val().rentBudget;
    tValue = snapshot.val().travelBudget;

    $("#mValueArea").append("<h2 id='month'>");
    $("#fValueArea").append("<h2 id='food'>");
    updateInfo(fValue, "Food");
    $("#rValueArea").append("<h2 id='rent'>");
    updateInfo(rValue, "Rent");
    $("#tValueArea").append("<h2 id='travel'>");
    updateInfo(tValue, "Travel");
  });
}

function updateInfo(value, type){
  var user = firebase.auth().currentUser
  var uid = user.uid
  var totalSpent = 0;

  if(type == "Food"){
    return firebase.database().ref("budget/" + uid + "/November/foodExpenses").once('value').then(function(snapshot) {
      // console.log(snapshot.val());
      snapshot.forEach((child) => {
        totalSpent += parseInt(child.val().value, 10);
        foodList.push(parseInt(child.val().value, 10));
      });
      var updatedRemain = fValue - totalSpent;
      fReamin =  updatedRemain
      updateGraph();
      // console.log(fReamin);
      $("#food").html(updatedRemain);

    });
  }else if(type == "Rent"){
    return firebase.database().ref("budget/" + uid + "/November/rentExpenses").once('value').then(function(snapshot) {
      // console.log(snapshot.val());
      snapshot.forEach((child) => {
        // console.log(child.val().value);
        totalSpent += parseInt(child.val().value, 10);
        rentList.push(parseInt(child.val().value, 10));
      });
      // console.log(rValue);
      var updatedRemain = rValue - totalSpent;
      rReamin =  updatedRemain;
      updateGraph();
      console.log(updatedRemain);
      $("#rent").html(updatedRemain);
    });
  }
  else if(type == "Travel"){
    return firebase.database().ref("budget/" + uid + "/November/travelExpenses").once('value').then(function(snapshot) {
      // console.log(snapshot.val());
      snapshot.forEach((child) => {
        // console.log(child.val().value);
        totalSpent += parseInt(child.val().value, 10);
        travelList.push(parseInt(child.val().value, 10));
      });
      // console.log(rValue);
      var updatedRemain = tValue - totalSpent;
      tReamin =  updatedRemain;
      updateGraph();
      console.log(updatedRemain);
      $("#travel").html(updatedRemain);
    });
  }



  function updateGraph(){
    var ctx = document.getElementById("myChart");
    console.log("t Reamin");
    console.log(tReamin);

    var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["food", "rent", "travel"],
      datasets: [{
        label: "Amount Spent",
        data: [fReamin, rReamin, tReamin],
        backgroundColor: [
          "#0080ff",
          "#F7CA18",
          "#ff7761"
        ]
      }]
    }
    });
  }
}
