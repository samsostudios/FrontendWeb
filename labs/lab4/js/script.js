$("document").ready(function(){

  var apikey = "75c1ed2fffde5911b32f85b5fea4214e";
  var currentURL = "http://api.openweathermap.org/data/2.5/weather";
  var currentParams = {
    "q": "boulder,us",
    "appid": apikey
  }

  getData();

  function getData(){
    $.getJSON(currentURL, currentParams, showCurrent);
  }

  var time = new Date();
  var hour = time.getHours();
  console.log(hour);

  if(hour > 17 || hour < 7){
    $("#img").append("<img id='image' src='images/night.png'>");
    $("body").css("backgroundColor", "#484848");
    $("body").css("backgroundImage", "url('images/nightClear.png')");
    $("h1").css("color", "#fff");
  }else{
    $("#img").append("<img id='image' src='images/day.png'>");
    $("body").css("backgroundColor", "#03a6ff");
  }
});


function showCurrent(response){
  // console.log(response);
  $("#dataArea").empty();

  var city = response.name;
  var currentTemp = convertTemp(response.main.temp);
  var weatherType = response.weather[0].main;

  $("#grid1").append("<h1 class='city'>" + city);
  $("#temp").append("<h2 class='curTemp'>" + currentTemp + "&#176;"+"F");
  $("#conditon").append("<h2 id='weatherType'>" + weatherType);
}

function convertTemp(tempK){
  var tempF = Math.round((tempK - 273.15)*9/5+32);
  return tempF;
}
























// Chart

// var ctx = $("#myChart");
//
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
