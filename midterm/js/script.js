$(document).ready(function(){
  setInterval(changeImg, 3000);

  $(".answer").hide();

  $(".question").click(showAnswer);
});

function showAnswer(){
  $(this).next('.answer').slideToggle(1000);
  $(this).toggleClass('close');
}

$("#road").on("click", function(){
  $("#destImg").attr("src", "images/Steamboat.jpg");
  $("#destTxt").text("The wide-open rolling terrain of the Yampa Valley has long been home to Steamboat's ranching legacy. Pedal our roads and you will be rewarded with miles of great vistas. Popular routes include everything from 20-mile out and backs, to 40-mile circuits, to mixed dirt touring, to epic hill climbs and century rides. Road rides vary in mileage so you’ll have options for a quick cruise, or an all- day crusher.");
});

$("#mountain").on("click", function(){
  $("#destImg").attr("src", "images/CrestedButte.jpg");
  $("#destTxt").text("Crested Butte and the Gunnison Valley offer an expansive mountain-biking experience like no other. The area’s more than 750 miles of mountain-biking trails lead to wildflower-peppered valleys, unparalleled mountain vistas and multi-hued desert expanses.");
});

$("#cross").on("click", function(){
  $("#destImg").attr("src", "images/Boulder_valmont.jpg");
  $("#destTxt").text("The Boulder Valmont Bike Park is a 42-acre, natural surface cycling terrain park offering diverse amenities for several riding styles and abilities. The park is free and open daily from dawn to dusk.");
});

// Gallery

var slides = ["images/cycling1.jpg", "images/cycling2.jpg", "images/cycling3.jpg", "images/cycling4.jpg", "images/cycling5.jpg", "images/cycling6.jpg", "images/cycling7.jpg"];
var count = 0;

function changeImg(){
  if( count < 6){
    count++;
    $("#galleryImg").attr("src", slides[count]);
  }else{
    count = 0;
  }

}
