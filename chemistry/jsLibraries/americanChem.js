//American startup
var americanElements = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon", "sodium", "magnesium", "aluminium", "silocon", "phosphorus", "sulfur", "chlorine", "argon"];
//var aEPhrase = ["The first element on the table", "The lightest; Can't become solid", "Used to make batteries."];
var americanEarned = 0;

//Open/Close
$("americanOC").onclick = function() {
  if(americanOpen == false) {
    $("american1").style.display = "block";
    $("american2").style.display = "block";
    $("mixAmerican").style.display = "block";
    $("americanText1").style.display = "block";
    $("americanText2").style.display = "block";
    americanOpen = true;
  } else if(americanOpen == true) {
    $("american1").style.display = "none";
    $("american2").style.display = "none";
    $("mixAmerican").style.display = "none";
    $("americanText1").style.display = "none";
    $("americanText2").style.display = "none";
    americanOpen = false;
  }
}

$("americanSelect1").onclick = function() {
  if(aEleOp1 == false) {
    $("aElements1").style.display = "block";
    aEleOp1 = true;
  } else if(aEleOp1 == true) {
    $("aElements1").style.display = "none";
    aEleOp1 = false;
  }
}

$("americanSelect2").onclick = function() {
  if(aEleOp2 == false) {
    $("aElements2").style.display = "block";
    aEleOp2 = true;
  } else if(aEleOp2 == true) {
    $("aElements2").style.display = "none";
    aEleOp2 = false;
  }
}

//Mix Elements
