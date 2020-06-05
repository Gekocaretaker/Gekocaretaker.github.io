//American startup
var americanElements = ['Blank', 'hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen', 'fluorine',
  'neon', 'sodium', 'magnesium', 'aluminium', 'silocon', 'phosphorus', 'sulfur', 'chlorine', 'argon', 'potassium', 'calcium', 'scandium',
  'titanium', 'vanadium', 'chromium', 'manganese', 'iron', 'cobalt', 'nickel', 'copper', 'zinc', 'gallium', 'germanium', 'arsenic',
  'selenium', 'bromine', 'krypton'];
var aEPhrase = ["It is useless.", "The first element on the table", "The lightest; Can't become solid", "Used to make batteries."];
var americanEarned = 0;

//American Loop Stoppers
var hydrogenEarned, copperEarned = false;

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
$id("mixAmerican").onclick = function() {
  if(0 == 0) {
    $id("errorMP3").play();
    alert("This is still is in beta! Please try later.");
  }
}
