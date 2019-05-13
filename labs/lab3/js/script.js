$(document).ready(function() {
  var flag = true;
  var clicked = false;

  $("#icon1").on("mouseenter", function() {
    if(flag){
      $("#apple").animate({color: '#009cf4'}, 500, "easeInOutSine");
    }
  });
  $("#icon1").on("mouseleave", function() {
    if(!flag){
      return;
    }
    $("#apple").animate({color: '#fff'},500, "easeInOutSine");
  });

  $("#icon2").on("mouseenter", function() {
    if(flag){
      $("#droid").animate({color: '#26a65b'}, 500, "easeInOutSine");
    }
  });
  $("#icon2").on("mouseleave", function() {
    if(!flag){
      return;
    }
    $("#droid").animate({color: '#fff'}, 100, "easeInOutSine");
  });

  $("#icon1").on("click", function() {
    clicked = !clicked;
    if(clicked){
      $(".titleContainer").animate({opacity: "0"}, 500);
      $("#icon2").animate({opacity: "0"}, 500, function() {
        $("#icon2").toggleClass("hidden");
        $(".container").animate({backgroundColor: "#fff"}, 500, "linear");
        $("#apple").animate({color: "#009cf4", fontSize: "15em"}, 500);
        flag = !flag;
        $("#icon1").on("click", function(){
          clicked = false;
        });
      });
    }else{
      $(".titleContainer").animate({opacity: "1"}, 500);
      $("#icon2").animate({opacity: "1"}, 500, function() {
        $("#icon2").removeClass("hidden");
        $(".container").animate({backgroundColor: "#1e1e1e"}, 500, "linear");
        $("#apple").animate({color: "#fff", fontSize: "8em"}, 500);
        flag = !flag;
        $("#icon1").on("click", function(){
          clicked = true;
        });
      });
    }
  });

  $("#icon2").on("click", function() {
    console.log("button 2 pressed");
    clicked = !clicked;
    if(clicked){
      $(".titleContainer").animate({opacity: "0"}, 500);
      $("#icon1").animate({opacity: "0"}, 500, function() {
        $("#icon1").toggleClass("hidden");
        $(".container").animate({backgroundColor: "#fff"}, 500, "linear");
        $("#droid").animate({color: "#26a65b", fontSize: "15em"}, 500, "swing");
        flag = !flag;
        $("#icon2").on("click", function(){
          clicked = false;
        });
      });
    }else{
      $(".titleContainer").animate({opacity: "1"}, 500);
      $("#icon1").animate({opacity: "1"}, 500, function() {
        $("#icon1").removeClass("hidden");
        $(".container").animate({backgroundColor: "#1e1e1e"}, 500, "linear");
        $("#droid").animate({color: "#fff", fontSize: "8em"}, 500);
        flag = !flag;
        $("#icon2").on("click", function(){
          clicked = true;
        });
      });
    }
  });

});
