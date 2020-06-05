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
function createEle(location, ident, boxSpot, imige) {
  var createDiv = document.createElement("div");
  createDiv.id = ident;
  createDiv.style.width = "28px";
  createDiv.style.height = "28px";
  $(location).appendChild(createDiv);
  if(boxSpot == 1) {
    $(ident).onclick = switchElems1;
  } else if(boxSpot == 2) {
    $(ident).onclick = switchElems2;
  } else if(boxSpot == 3) {
    $(ident).onclick = switchElems3;
  } else if(boxSpot == 4) {
    $(ident).onclick = switchElems4;
  } else {
    alert("Element in " + location + " is too high of a boxSpot value! Max value is 4!");
  }
  var createImg = document.createElement("img");
  createImg.src = imige;
  createImg.style.width = "28px";
  createImg.style.height = "28px";
  $(ident).appendChild(createImg);
  $(ident).style.float = "left";
}
function createBre(location, ident) {
  var createBreak = document.createElement("br");
  createBreak.id = ident;
  createBreak.style.clear = "both";
  $(location).appendChild(createBreak);
}

//Switch Elements
function switchElems1() {
  $("greekSelect1").firstElementChild.src = this.querySelector("img").src;
  $("gElements1").style.display = "none";
  gEleOp1 = false;
}

function switchElems2() {
  $("greekSelect2").firstElementChild.src = this.querySelector("img").src;
  $("gElements2").style.display = "none";
  gEleOp1 = false;
}

function switchElems3() {
  $("americanSelect1").firstElementChild.src = this.querySelector("img").src;
  $("aElements1").style.display = "none";
  gEleOp1 = false;
}

function switchElems4() {
  $("americanSelect2").firstElementChild.src = this.querySelector("img").src;
  $("aElements2").style.display = "none";
  gEleOp1 = false;
}
