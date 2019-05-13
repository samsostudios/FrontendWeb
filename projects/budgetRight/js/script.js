$(document).ready(function (){
  $("body").animate({opacity: "1"}, 1000);
  // fadeStars();
});

var typed = new Typed("#welcomeTxt", {
  strings: ["Welcome to Budget Right!"],
  typeSpeed: 40,
  showCursor: false
});

var siBtn = document.getElementById("signUpBtn");
siBtn.addEventListener("click", function(){
  window.location.href = "signInPage/index.html";
});

var starAnimations = new TimelineMax({
  onComplete: function(){
    this.reverse();
  }
});

starAnimations.to('#circleStar', 1, {opacity: 1, ease: Circ.easeOut}, 2);

