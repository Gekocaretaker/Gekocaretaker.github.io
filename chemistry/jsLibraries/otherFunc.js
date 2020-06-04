function allGive(pass) {
  if(pass == "admin") {
    $("1ame1").style.visibility = "visible";
    $("2ame1").style.visibility = "visible";
    $("3ame1").style.visibility = "visible";
    $("4ame1").style.visibility = "visible";
    $("5ame1").style.visibility = "visible";
    $("6ame1").style.visibility = "visible";
    $("7ame1").style.visibility = "visible";
    $("8ame1").style.visibility = "visible";
    $("9ame1").style.visibility = "visible";
    $("10ame1").style.visibility = "visible";
    $("11ame1").style.visibility = "visible";
    $("12ame1").style.visibility = "visible";
    $("13ame1").style.visibility = "visible";
    $("14ame1").style.visibility = "visible";
    $("15ame1").style.visibility = "visible";
    $("16ame1").style.visibility = "visible";
    $("17ame1").style.visibility = "visible";
    $("18ame1").style.visibility = "visible";
    $("1ame2").style.visibility = "visible";
    $("2ame2").style.visibility = "visible";
    $("3ame2").style.visibility = "visible";
    $("4ame2").style.visibility = "visible";
    $("5ame2").style.visibility = "visible";
    $("6ame2").style.visibility = "visible";
    $("7ame2").style.visibility = "visible";
    $("8ame2").style.visibility = "visible";
    $("9ame2").style.visibility = "visible";
    $("10ame2").style.visibility = "visible";
    $("11ame2").style.visibility = "visible";
    $("12ame2").style.visibility = "visible";
    $("13ame2").style.visibility = "visible";
    $("14ame2").style.visibility = "visible";
    $("15ame2").style.visibility = "visible";
    $("16ame2").style.visibility = "visible";
    $("17ame2").style.visibility = "visible";
    $("18ame2").style.visibility = "visible";
  } else {
    alert("You are not allowed!");
  }
}

function oneGive(ele, pass) {
  if(pass == "admin") {
    $(ele).style.visibility = "visible";
  } else {
    alert("Cheater!");
  }
}

function oneTake(ele) {
  $(ele).style.visibility = "hidden";
}
