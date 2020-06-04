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

//Mix Elements
$("mixGreek").onclick = function() {
  var mainGreek1 = document.querySelector("#greek1 div.selected-box div.selected-icon img");
  var mainGreek2 = document.querySelector("#greek2 div.selected-box div.selected-icon img");
  if((mainGreek1.src.includes(greekElements[0]) && mainGreek2.src.includes(greekElements[1])) || (mainGreek1.src.includes(greekElements[1]) && mainGreek2.src.includes(greekElements[0]))) {
    $("5gre1").style.visibility = "visible";
    $("5gre2").style.visibility = "visible";
    greekEarned = greekEarned + 1;
    alert("You have discovered Steam!");
  }
}
