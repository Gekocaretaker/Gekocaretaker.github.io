//Debugging functions
function allGive(pass) {
  if(pass == "admin") {
    var pass1 =  $id("aElements1").getElementsByTagName('div');
    var pass2 = $id("aElements2").getElementsByTagName('div');
    for(i = 0; i < pass1.length; i++) {
      pass1[i].style.display = "block";
      pass2[i].style.display = "block";
    }
    var pass3 = $id("gElements1").getElementsByTagName('div');
    var pass4 = $id("gElements2").getElementsByTagName('div');
    for(i = 0; i < pass3.length; i++) {
      pass3[i].style.display = "block";
      pass4[i].style.display = "block";
    }
  } else {
    alert("You are not allowed!");
  }
}

function oneGive(ele, pass) {
  if(pass == "admin") {
    $id(ele).style.display = "block";
  } else {
    alert("Cheater!");
  }
}

function oneTake(ele) {
  $id(ele).style.display = "none";
}

//Create Elements
function createEle(location, ident, boxSpot, imige, elemValue, elemType) {
  var createDiv = document.createElement("div");
  createDiv.id = ident;
  createDiv.style.width = "28px";
  createDiv.style.height = "28px";
  createDiv.setAttribute('element-value', elemValue);
  elemValue++;
  $id(location).appendChild(createDiv);
  if(boxSpot == 1) {
    $id(ident).onclick = switchElems1;
  } else if(boxSpot == 2) {
    $id(ident).onclick = switchElems2;
  } else if(boxSpot == 3) {
    $id(ident).onclick = switchElems3;
  } else if(boxSpot == 4) {
    $id(ident).onclick = switchElems4;
  } else {
    alert("Element in " + location + " is too high of a boxSpot value! Max value is 4!");
  }
  var createImg = document.createElement("img");
  createImg.src = imige;
  createImg.style.width = "28px";
  createImg.style.height = "28px";
  $id(ident).appendChild(createImg);
  $id(ident).style.float = "left";
  if(elemValue >= 6 && elemType == "greek") {
    $id(ident).style.display = "none";
  } else if(elemValue < 6 && elemType == "greek") {
    $id(ident).style.display = "block";
  } else if(elemType == "american") {
    $id(ident).style.display = "none";
  }
}
function createBre(location) {
  var createBreak = document.createElement("br");
  createBreak.style.clear = "both";
  $id(location).appendChild(createBreak);
}

//Switch Elements
function switchElems1() {
  $id("greekSelect1").firstElementChild.src = this.querySelector("img").src;
  $id("gElements1").style.display = "none";
  $id("greekSelect1").setAttribute("element-value", this.getAttribute("element-value"));
  $id("greekText1").value = greekElements[this.getAttribute("element-value")] + " - " + gEPhrase[this.getAttribute("element-value")];
  gEleOp1 = false;
}

function switchElems2() {
  $id("greekSelect2").firstElementChild.src = this.querySelector("img").src;
  $id("gElements2").style.display = "none";
  $id("greekSelect2").setAttribute("element-value", this.getAttribute("element-value"));
  $id("greekText2").value = greekElements[this.getAttribute("element-value")] + " - " + gEPhrase[this.getAttribute("element-value")];
  gEleOp2 = false;
}

function switchElems3() {
  $id("americanSelect1").firstElementChild.src = this.querySelector("img").src;
  $id("aElements1").style.display = "none";
  $id("americanSelect1").setAttribute("element-value", this.getAttribute("element-value"));
  $id("americanText1").value = americanElements[this.getAttribute("element-value")] + " - " + aEPhrase[this.getAttribute("element-value")];
  aEleOp1 = false;
}

function switchElems4() {
  $id("americanSelect2").firstElementChild.src = this.querySelector("img").src;
  $id("aElements2").style.display = "none";
  $id("americanSelect2").setAttribute("element-value", this.getAttribute("element-value"));
  $id("americanText2").value = americanElements[this.getAttribute("element-value")] + " - " + aEPhrase[this.getAttribute("element-value")];
  aEleOp2 = false;
}
