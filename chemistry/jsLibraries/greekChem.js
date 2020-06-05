//All startup
var $id = function(id) {
  return document.getElementById(id);
};

var $cl = function(className) {
  return document.getElementsByClassName(className);
}

//Greek startup
var greekEarned = 4;
var greekElements = ["Blank", "fire", "water", "earth", "air", "steam"];
var gEPhrase = ["It is useless.", "The core to all things hot.", "It can be both kind and cruel.", "A force to be reckoned with.", "Kindness on a warm day.", "Not liquid, not gas."];
var steamEarned = false;
//Open/Close
$id("greekOC").onclick = function() {
  if(greekOpen == false) {
    $id("greek1").style.display = "block";
    $id("greek2").style.display = "block";
    $id("mixGreek").style.display = "block";
    $id("greekText1").style.display = "block";
    $id("greekText2").style.display = "block";
    greekOpen = true;
  } else if(greekOpen == true) {
    $id("greek1").style.display = "none";
    $id("greek2").style.display = "none";
    $id("mixGreek").style.display = "none";
    $id("greekText1").style.display = "none";
    $id("greekText2").style.display = "none";
    greekOpen = false;
  }
};

$id("greekSelect1").onclick = function() {
  if(gEleOp1 == false) {
    $id("gElements1").style.display = "block";
    gEleOp1 = true;
  } else if(gEleOp1 == true) {
    $id("gElements1").style.display = "none";
    gEleOp1 = false;
  }
}

$id("greekSelect2").onclick = function() {
  if(gEleOp2 == false) {
    $id("gElements2").style.display = "block";
    gEleOp2 = true;
  } else if(gEleOp2 == true) {
    $id("gElements2").style.display = "none";
    gEleOp2 = false;
  }
}

//Mix Elements
$id("mixGreek").onclick = function() {
  if(($id("greekSelect1").getAttribute("element-value") == 1 && $id("greekSelect2").getAttribute("element-value") == 2 && steamEarned == false) || ($id("greekSelect1").getAttribute("element-value") == 2 && $id("greekSelect2").getAttribute("element-value") == 1 && steamEarned == false)) {
    $id("unlockMP3").play();
    alert("You unlocked Steam!");
    $id("gre1t6").style.display = "block";
    $id("gre2t6").style.display = "block";
    greekEarned++;
    steamEarned = true;
  }
}
