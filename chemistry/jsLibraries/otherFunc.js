//Debugging functions
function allGive(pass) {
  if(pass == "admin") {

  } else {
    alert("You are not allowed!");
  }
}

function oneGive(ele, pass) {
  if(pass == "admin") {
    $(ele).style.display = "none";
  } else {
    alert("Cheater!");
  }
}

function oneTake(ele) {
  $(ele).style.display = "none";
}

//Create Elements
function createEle(location, ident, imige) {
  var createDiv = document.createElement("div");
  createDiv.id = ident;
  createDiv.style.width = "28px";
  createDiv.style.height = "28px";
  $(location).appendChild(createDiv);
  var createImg = document.createElement("img");
  createImg.src = imige;
  createImg.style.width = "28px";
  createImg.style.height = "28px";
  $(ident).appendChild(createImg);
  $(ident).style.float = "left";
  $(ident).style.display = "none";
}
function createBre(location, ident) {
  var createBreak = document.createElement("br");
  createBreak.id = ident;
  createBreak.style.clear = "both";
  $(location).appendChild(createBreak);
}
