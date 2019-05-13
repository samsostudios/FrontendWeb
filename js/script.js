$(document).ready(function(){
  TweenMax.to($("#labs"), 0.5, {left: "0%;", opacity: "1.0", ease: Back.easeOut.config(0.75)})
  TweenMax.to($("#projects"), 0.5, {left: "0%;", opacity: "1.0", delay: 0.5, ease: Back.easeOut.config(0.75)})
  TweenMax.to($("#midterm"), 0.5, {left: "0%;", opacity: "1.0", delay: 1.0, ease: Back.easeOut.config(0.75)})
  TweenMax.to($("#final"), 0.5, {left: "0%;", opacity: "1.0", delay: 1.5, ease: Back.easeOut.config(0.75)})
  TweenMax.to($("#journal"), 0.5, {left: "0%;", opacity: "1.0", delay: 2.0, ease: Back.easeOut.config(0.75)})
  TweenMax.to($("#pageTitle"), 1, {opacity: "1.0"});
  $(".itemsContainer").toggle("fold");
});

var labClicked = 0;
var projClicked = 0;

$("#labs").on("click", function(){
  labClicked = 1;
  console.log(labClicked);
  if(projClicked == 1){
    TweenMax.to($("#titleText2"), 0.5, {opacity: "0", display: "none"});
    TweenMax.to($("#titleText1"), 0.5, {opacity: "1.0", display: "block", delay: 0.5});

    TweenMax.to($("#project1"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#project2"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#project3"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});

    TweenMax.to($("#lab1"), 0.5, {left: "0%", display: "block", delay: 0.5, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab2"), 0.5, {left: "0%", display: "block", delay: 0.75, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab3"), 0.5, {left: "0%", display: "block", delay: 1, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab4"), 0.5, {left: "0%", display: "block", delay: 1.25, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab5"), 0.5, {left: "0%", display: "block", delay: 1.5, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab6"), 0.5, {left: "0%", display: "block", delay: 1.75, ease: Back.easeOut.config(0.75)});
    projClicked = 0;
  }
  else{
    TweenMax.to($("#titleText1"), 0.5, {opacity: "1.0", display: "block", delay: 0.5});
    TweenMax.to($("#lab1"), 0.5, {left: "0%", display: "block", delay: 0.5, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab2"), 0.5, {left: "0%", display: "block", delay: 0.75, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab3"), 0.5, {left: "0%", display: "block", delay: 1, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab4"), 0.5, {left: "0%", display: "block", delay: 1.25, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab5"), 0.5, {left: "0%", display: "block", delay: 1.5, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab6"), 0.5, {left: "0%", display: "block", delay: 1.75, ease: Back.easeOut.config(0.75)});
    $(".itemsContainer").animate({opacity: "1.0"}, function(){
      $(".itemsContainer").toggle("fold");
    });
  }
});

$("#projects").on("click", function(){
  projClicked = 1
  if(labClicked == 1){
    TweenMax.to($("#lab1"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab2"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab3"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab4"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab5"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#lab6"), 0.5, {left: "3000%", display: "none", ease: Back.easeOut.config(0.75)});

    TweenMax.to($("#titleText1"), 0.5, {opacity: "0", display: "none"});
    TweenMax.to($("#titleText2"), 0.5, {opacity: "1.0", display: "block", delay: 0.5});

    TweenMax.to($("#project1"), 0.5, {left: "0%", display: "block", delay: 0.5, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#project2"), 0.5, {left: "0%", display: "block", delay: 0.75, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#project3"), 0.5, {left: "0%", display: "block", delay: 1, ease: Back.easeOut.config(0.75)});
    labClicked = 0;
  }else{
    TweenMax.to($("#titleText2"), 0.5, {opacity: "1.0", display: "block", delay: 0.5});
    TweenMax.to($("#project1"), 0.5, {left: "0%", display: "block", delay: 0.5, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#project2"), 0.5, {left: "0%", display: "block", delay: 0.75, ease: Back.easeOut.config(0.75)});
    TweenMax.to($("#project3"), 0.5, {left: "0%", display: "block", delay: 1, ease: Back.easeOut.config(0.75)});
    $(".itemsContainer").animate({opacity: "1.0"},500 , function(){
      $(".itemsContainer").toggle("fold", 500);
    });
  }
});
