//All startup
var $ = function(id) {
  return document.getElementById(id);
};

//Greek startup
var greekEarned = 4;
var greekElements = ["fire", "water", "earth", "air", "steam"];
var gEPhrase = ["The core to all things hot.", "It can be both kind and cruel.", "A force to be reckoned with.", "Kindness on a warm day.", "Not liquid, not gas."];

//American Loop Stoppers
var hydrogenDis = false;

//Open/Close
$("greekOC").onclick = function() {
  if(greekOpen == false) {
    $("greek1").style.display = "block";
    $("greek2").style.display = "block";
    $("mixGreek").style.display = "block";
    $("greekText1").style.display = "block";
    $("greekText2").style.display = "block";
    greekOpen = true;
  } else if(greekOpen == true) {
    $("greek1").style.display = "none";
    $("greek2").style.display = "none";
    $("mixGreek").style.display = "none";
    $("greekText1").style.display = "none";
    $("greekText2").style.display = "none";
    greekOpen = false;
  }
};

$("greekSelect1").onclick = function() {
  var greekClick1 = Array.from($("greek1").children);
  var greekCL1 = greekClick1.length;
  var gI1;
  if(gEleOp1 == false) {
    for(gI1 = 1; gI1 < greekCL1; gI1++) {
      greekClick1[gI1].style.display = "block";
    }
    gEleOp1 = true;
  } else if(gEleOp1 == true) {
    for(gI1 = 1; gI1 < greekCL1; gI1++) {
      greekClick1[gI1].style.display = "none";
    }
    gEleOp1 = false;
  }
}

$("greekSelect2").onclick = function() {
  var greekClick2 = Array.from($("greek2").children);
  var greekCL2 = greekClick2.length;
  var gI2;
  if(gEleOp2 == false) {
    for(gI2 = 1; gI2 < greekCL2; gI2++) {
      greekClick2[gI2].style.display = "block";
    }
    gEleOp2 = true;
  } else if(gEleOp2 == true) {
    for(gI2 = 1; gI2 < greekCL2; gI2++) {
      greekClick2[gI2].style.display = "none";
    }
    gEleOp2 = false;
  }
}

//Mix Elements
