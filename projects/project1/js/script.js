$(document).ready(function() {
  $("body").animate({backgroundColor: "#e0e5da"}, 500);
  animateSlide1();
});

var slide1 = document.getElementById("slide1");
slide1.addEventListener("wheel", function() {changeSlide(slide1, slide2)});

var slide2 = document.getElementById("slide2");
slide2.addEventListener("wheel", function() {changeSlide(slide2, slide3)});

var slide3 = document.getElementById("slide3");
slide3.addEventListener("wheel", function() {changeSlide(slide3, slide4)});

var slide4 = document.getElementById("slide4");
slide4.addEventListener("wheel", function() {changeSlide(slide4, slide5)});

var slide5 = document.getElementById("slide5");
slide5.addEventListener("wheel", function() {changeSlide(slide5, slide5)});

function changeSlide(curSlide, nextSlide){
  console.log(curSlide.id);
  var delta = event.deltaY;

  if(curSlide.id != "slide5"){
    if(delta > 0){
      $(curSlide).removeClass("active");
      $(nextSlide).addClass("active");
      selectAnimation(nextSlide);
    }
  }else{
    alert("Pkease refresh the page!")
  }
}

function selectAnimation(slide){
  // console.log(slide.id);
  switch (slide.id) {
    case "slide2":
      animateSlide2();
      break;
    case "slide3":
      animateSlide3();
      break;
    case "slide4":
      animateSlide4();
      break;
    case "slide5":
      animateSlide5();
      break;
    default:
  }
}

// SVG Animations
function animateSlide1(){
  $("body").animate({backgroundColor: "#e0e5da"}, 1000);
  TweenMax.from("#sPink", 1, {x: 1000});
  TweenMax.from("#sBlue", 1, {y: 1000});
  TweenMax.to("#sYellow", 1, {opacity: 0.8, delay: 0.5, ease: Power3.easeOut});
  TweenMax.to("#sBlue", 1, {opacity: 0.8, delay: 0.5, ease: Power3.easeOut});
  TweenMax.to("#sPink", 1, {opacity: 0.8, delay: 0.5, ease: Power3.easeOut});

  TweenMax.from("#jNameTitle", 1, {x: 10000});
  TweenMax.to("#jNameTitle", 1, {opacity: 1, delay: 1});

  TweenMax.from("#text1", 1, {x: -10000, delay: 1});
  TweenMax.from("#text3", 1, {x: -10000, delay: 1});
  TweenMax.to("#text2", 1, {opacity: 1, delay: 2.5});
  TweenMax.to("#text4", 1, {opacity: 1, delay: 2.5});
}

//polygons
function animateSlide2(){
  $("body").animate({backgroundColor: "#c2bfb9"}, 1000);
  $("#shape1").animate({opacity: "1.0"}, 1000, function (){
    $("#shape2").animate({opacity: "1.0"}, 500, function() {
      $("#shape3").animate({opacity: "1.0"}, 500, function(){
        $("#shape4").animate({opacity: "1.0"}, 500, function(){
          $("#shape5").animate({opacity: "1.0"}, 500, function(){
            $("#shape6").animate({opacity: "1.0"}, 500, function(){
              $("#shape7").animate({opacity: "1.0"}, 500, function(){
                $("#shape8").animate({opacity: "1.0"}, 500);
              })
            });
          });
        });
      });
    });
  });
}

// circles
function animateSlide3(){
  $("body").animate({backgroundColor: "#b7b7b7"}, 1000);
  TweenMax.to("#circleShape", 2, {rotation: 1080, transformOrigin:"50% 50%",  ease: Back.easeOut.config(1.7)});
}

//squares
function animateSlide4(){
  $("body").animate({backgroundColor: "#f0c24f"}, 1000);
  TweenMax.to("#squareShape", 2, {rotation: 270, transformOrigin: "50% 50%"});
  TweenMax.to("#squareShape", 2, {scaleX: 1.0, scaleY: 1.0});
}

function animateSlide5(){
  $("body").animate({backgroundColor: "#1e1e1e"}, 1000);
  $("#red").animate({opacity :"1"}, 500, function(){
    $("#orange").animate({opacity: "1"}, 500,function(){
      $("#yellow").animate({opacity: "1"}, 500, function(){
        $("#green").animate({opacity: "1"}, 500, function(){
          $("#blue").animate({opacity: "1"}, 500);
        });
      });
    });
  });
}
