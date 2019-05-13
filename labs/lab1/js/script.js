var contentArea = document.getElementById("content");
// console.log(contentArea);

var presentationArea = document.getElementById("present");

var shapeArea = document.getElementById("shapeContainer");
var title = document.getElementById("title");

var backIcon = document.getElementById("backIcon");
backIcon.addEventListener("click", returnBack);

var getCircle = document.getElementById("circleImg");
getCircle.addEventListener("mouseover", overShape);
getCircle.addEventListener("mouseout", outShape);
getCircle.addEventListener("click", hideShapeArea);

var getDiamond = document.getElementById("diamondImg");
getDiamond.addEventListener("mouseover", overShape);
getDiamond.addEventListener("mouseout", outShape);
getDiamond.addEventListener("click", hideShapeArea);

var getSquare = document.getElementById("squareImg");
getSquare.addEventListener("mouseover", overShape);
getSquare.addEventListener("mouseout", outShape);
getSquare.addEventListener("click", hideShapeArea);

var getTriangle = document.getElementById("triangleImg");
getTriangle.addEventListener("mouseover", overShape);
getTriangle.addEventListener("mouseout", outShape);
getTriangle.addEventListener("click", hideShapeArea);

function overShape(shape){
  // console.log(shape);
  curr = shape.path[0].id
  switch (curr) {
    case "circleImg":
      // console.log("in circle");
      shape.path[0].className = "grownShape";
      getSquare.className = "shrunkShape";
      getDiamond.className = "shrunkShape";
      getTriangle.className = "shrunkShape";
      break;
    case "diamondImg":
      getCircle.className = "shrunkShape";
      shape.path[0].className = "grownShape";
      getSquare.className = "shrunkShape";
      getTriangle.className = "shrunkShape";
      break;
    case "squareImg":
      getCircle.className = "shrunkShape";
      getDiamond.className = "shrunkShape";
      getSquare.className = "grownShape";
      getTriangle.className = "shrunkShape";
      break;
    case "triangleImg":
      getCircle.className = "shrunkShape";
      getDiamond.className = "shrunkShape";
      getSquare.className = "shrunkShape";
      getTriangle.className = "grownShape";
      break;
    default:
  }
}
function outShape(shape){
  curr = shape.path[0].id
  switch (curr) {
    case "circleImg":
      shape.path[0].className = "normalLarge";
      getSquare.className = "normalSmall";
      getDiamond.className = "normalSmall";
      getTriangle.className = "normalSmall";
      break;
    case "diamondImg":
      getCircle.className = "normalSmall";
      shape.path[0].className = "normalLarge";
      getSquare.className = "normalSmall";
      getTriangle.className = "normalSmall";
      break;
    case "squareImg":
      getCircle.className = "normalSmall";
      getDiamond.className = "normalSmall";
      getSquare.className = "normalLarge";
      getTriangle.className = "normalSmall";
      break;
    case "triangleImg":
      getCircle.className = "normalSmall";
      getDiamond.className = "normalSmall";
      getSquare.className = "normalSmall";
      getTriangle.className = "normalLarge";
      break;
    default:
  }
}


function hideShapeArea(shape){
  presentationArea.style.backgroundColor = "#0d0f05";
  contentArea.style.backgroundColor = "#0d0f05";
  shapeArea.className = "hide";
  title.className = "hide";
  backIcon.style.display = "flex";
  backIcon.style.justifyContent = "center";
  document.getElementById("answer").className = "answer";

  switch (shape.path[0].id) {
    case "circleImg":
      document.getElementById("soloCircle").className = "show shapes";
      break;
    case "diamondImg":
      document.getElementById("soloDiamond").className = "show shapes";
      break;
    case "squareImg":
      document.getElementById("soloSquare").className = "show shapes";
      break;
      case "triangleImg":
        document.getElementById("soloTri").className = "show shapes";
        break;
    default:

  }
}

function returnBack(){
  presentationArea.style.backgroundColor = "#fff";
  contentArea.style.backgroundColor = "#fff";
  shapeArea.className = "shapes";
  title.className = "title ";
  backIcon.style.display = "none";
  document.getElementById("soloCircle").className = "hide";
  document.getElementById("soloDiamond").className = "hide";
  document.getElementById("soloSquare").className = "hide";
  document.getElementById("soloTri").className = "hide";
}
