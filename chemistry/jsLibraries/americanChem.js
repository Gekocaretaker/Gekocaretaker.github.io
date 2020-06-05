//American startup
var americanElements = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon", "sodium", "magnesium", "aluminium", "silocon", "phosphorus", "sulfur", "chlorine", "argon"];
//var aEPhrase = ["The first element on the table", "The lightest; Can't become solid", "Used to make batteries."];
var americanEarned = 0;

//Open/Close
$id("americanOC").onclick = function() {
  if(americanOpen == false) {
    $id("american1").style.display = "block";
    $id("american2").style.display = "block";
    $id("mixAmerican").style.display = "block";
    $id("americanText1").style.display = "block";
    $id("americanText2").style.display = "block";
    americanOpen = true;
  } else if(americanOpen == true) {
    $id("american1").style.display = "none";
    $id("american2").style.display = "none";
    $id("mixAmerican").style.display = "none";
    $id("americanText1").style.display = "none";
    $id("americanText2").style.display = "none";
    americanOpen = false;
  }
}

$id("americanSelect1").onclick = function() {
  if(aEleOp1 == false) {
    $id("aElements1").style.display = "block";
    aEleOp1 = true;
  } else if(aEleOp1 == true) {
    $id("aElements1").style.display = "none";
    aEleOp1 = false;
  }
}

$id("americanSelect2").onclick = function() {
  if(aEleOp2 == false) {
    $id("aElements2").style.display = "block";
    aEleOp2 = true;
  } else if(aEleOp2 == true) {
    $id("aElements2").style.display = "none";
    aEleOp2 = false;
  }
}

//Mix Elements
