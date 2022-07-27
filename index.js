// Color filter generator: https://codepen.io/sosuke/pen/Pjoqqp

var miniSidebar = true;
const Themes = Object.freeze({
	White: Symbol("white"),
	Black: Symbol("black"),
	LightGray: Symbol("light_gray"),
	Gray: Symbol("gray"),
	Brown: Symbol("brown"),
	Red: Symbol("red"),
	Orange: Symbol("orange"),
	Yellow: Symbol("yellow"),
	Lime: Symbol("lime"),
	Green: Symbol("green"),
	Cyan: Symbol("cyan"),
	LightBlue: Symbol("light_blue"),
	Blue: Symbol("blue"),
	Purple: Symbol("purple"),
	Magenta: Symbol("magenta"),
	Pink: Symbol("pink") // TODO: Rainbow, Flags, and other stuff?
});

$(window).on("load", function() {
	updateTheme();
});

function toggleDisplay(id) {
  if(document.getElementById(id).style.display == 'none') {
    $('#' + id).css('display', 'block');
  } else {
    $('#' + id).css('display', 'none');
  }
}

function toggleSidebar() {
	if (miniSidebar) {
		$('#sidebar').css('width', '250px');
		$('#main').css('marginLeft', '250px');
		miniSidebar = false;
	} else {
		$('#sidebar').css('width', '85px');
		$('#main').css('marginLeft', '85px');
		miniSidebar = true;
	}
}

function updateTheme() {
	var theme = localStorage.getItem("theme");
	switch(theme) {
		// The 5 theme objects: '.sidebar' 'body' '.custom-icon-color' '.sidebar a' '.sidebar a:hover' body
		case "white":
			setThemeData("url('/images/backgrounds/white_sidebar.png')", "url('/images/backgrounds/white_main.png')", "#414141", "#080808", "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)");
			break;
		case "black":
			setThemeData("url('/images/backgrounds/black_sidebar.png')", "url('/images/backgrounds/black_main.png')", "#bfbfbf", "#dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) brightness(102%) contrast(74%)");
			break;
		case "light_gray":
			setThemeData("url('/images/backgrounds/light_gray_sidebar.png')", "url('/images/backgrounds/light_gray_main.png')", "#414141", "#080808", "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)");
			break;
		case "gray":
			setThemeData("url('/images/backgrounds/gray_sidebar.png')", "url('/images/backgrounds/gray_main.png')", "#bfbfbf", "#dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) brightness(102%) contrast(74%)");
			break;
		case "brown":
			setThemeData("url('/images/backgrounds/brown_sidebar.png')", "url('/images/backgrounds/brown_main.png')", "#bfbfbf", "#dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) bridhtness(102%) contrast(74%)");
			break;
		case "red":
			setThemeData("url('/images/backgrounds/red_sidebar.png')", "url('/images/backgrounds/red_main.png')", "#bfbfbf", "#dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) bridhtness(102%) contrast(74%)");
			break;
		case "orange":
			setThemeData("url('/images/backgrounds/orange_sidebar.png')", "url('/images/backgrounds/orange_main.png')", "#414141", "#080808", "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)");
			break;
		case "yellow":
			setThemeData("url('/images/backgrounds/yellow_sidebar.png')", "url('/images/backgrounds/yellow_main.png')", "#414141", "#080808", "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)");
			break;
		case "lime":
			setThemeData("url('/images/backgrounds/lime_sidebar.png')", "url('/images/backgrounds/lime_main.png')", "#414141", "#080808", "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)");
			break;
		case "green":
			setThemeData("url('/images/backgrounds/green_sidebar.png')", "url('/images/backgrounds/green_main.png')", "#bfbfbf", "#dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) bridhtness(102%) contrast(74%)");
			break;
		case "cyan":
			setThemeData("url('/images/backgrounds/cyan_sidebar.png')", "url('/images/backgrounds/cyan_main.png')", "#bfbfbf", "dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) bridhtness(102%) contrast(74%)");
			break;
		case "light_blue":
			setThemeData("url('/images/backgrounds/light_blue_sidebar.png')", "url('/images/backgrounds/light_blue_main.png')", "#414141", "#080808", "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)");
			break;
		case "blue":
			setThemeData("url('/images/backgrounds/blue_sidebar.png')", "url('/images/backgrounds/blue_main.png')", "#bfbfbf", "#dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) bridhtness(102%) contrast(74%)");
			break;
		case "purple":
			setThemeData("url('/images/backgrounds/purple_sidebar.png')", "url('/images/backgrounds/purple_main.png')", "#bfbfbf", "#dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) bridhtness(102%) contrast(74%)");
			break;
		case "magenta":
			setThemeData("url('/images/backgrounds/magenta_sidebar.png')", "url('/images/backgrounds/magenta_main.png')", "#bfbfbf", "#dfdfdf", "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) bridhtness(102%) contrast(74%)");
			break;
		case "pink":
			setThemeData("url('/images/backgrounds/pink_sidebar.png')", "url('/images/backgrounds/pink_main.png')", "#414141", "#080808", "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)");
			break;
		default:
			// Do Nothing
			break;
	}
}

function setThemeData(sidebar, main, color, colorHover, filter) {
	$(".sidebar").css("background-image", sidebar);
	$("body").css("background-image", main);
	$("body").css("color", color);
	$("custom-icon-color").css("filter", filter);
	$(".sidebar a").css("color", color);
	$(".sidebar a").hover(function() {
		$(this).css("color", colorHover);
	}, function() {
		$(this).css("color", color);
	});
	//$(".sidebar a:hover").css("color", colorHover);
}