// API Keys
 //Acess token: 4eGsPoTvAVH7Fl5cPC3Sw
 //Security Key: c9vWTUEbS4yTRjzTSPDLG3FgMvV3k9yKM9eRQsqC


 $(document).ready(function(){
    var accessToken = "4eGsPoTvAVH7Fl5cPC3Sw";
    var securityKey = "c9vWTUEbS4yTRjzTSPDLG3FgMvV3k9yKM9eRQsqC";
    var url = "https://api.aerisapi.com/fires/within";
    var params = {
        "p": "boulder,co",
        "radius": "200miles",
        "from": "-10months",
        "limit": "10",
        "client_id": "4eGsPoTvAVH7Fl5cPC3Sw",
        "client_secret": "c9vWTUEbS4yTRjzTSPDLG3FgMvV3k9yKM9eRQsqC"
    }

    getData();

    function getData(){
        $.getJSON(url, params, showResults);
    }

 });


 function showResults(response){
    
    var fires = response.response
    console.log(fires);

    for(item in fires){
        // console.log(fires[item]);
        var fireName = fires[item].place.name;
        var contained = fires[item].report.perContained;
        var fireSize = fires[item].report.areaMI;
        
        $("#firesGrid").append("<div class='fireItem'> <i class='fas fa-fire'></i><h1>" + fireName
        + "<h1>" + contained + "% Contained" + "<h1>" + fireSize + "Square Miles");
    }

 }

 $("#reportPageBtn").click(function(){
     console.log("report pressed");
    window.location.href = "./reportFire/report.html";
 });

 $("#reportedPageBtn").click(function(){
    console.log("report pressed");
   window.location.href = "./reportedFires/reported.html";
});