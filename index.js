// Color filter generator: https://codepen.io/sosuke/pen/Pjoqqp

var miniSidebar = true;
var showSidebar = true;
var params;

const Themes = {
	white: {
		sidebar: "url('/images/backgrounds/white_sidebar.png')",
		body: "url('/images/backgrounds/white_main.png')",
		iconColor: "#414141",
		linkColor: "#080808",
		linkHover: "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)",
		backingColor: "#f4f7f8"
	},
	black: {
		sidebar: "url('/images/backgrounds/black_sidebar.png')",
		body: "url('/images/backgrounds/black_main.png')",
		iconColor: "#bfbfbf",
		linkColor: "#dfdfdf",
		linkHover: "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) brightness(102%) contrast(74%)",
		backingColor: "#1f2c31"
	},
	light_gray: {
		sidebar: "url('/images/backgrounds/light_gray_sidebar.png')",
		body: "url('/images/backgrounds/light_gray_main.png')",
		iconColor: "#414141",
		linkColor: "#080808",
		linkHover: "invert(23%) sepia(5%) saturate(0%) hue-rotate(139deg) brightness(103%) contrast(95%)",
		backingColor: "#45636d"
	},
	gray: {
		sidebar: "url('/images/backgrounds/gray_sidebar.png')",
		body: "url('/images/backgrounds/gray_main.png')",
		iconColor: "#bfbfbf",
		linkColor: "#dfdfdf",
		linkHover: "invert(82%) sepia(0%) saturate(1111%) hue-rotate(213deg) brightness(102%) contrast(74%)",
		backingColor: "#7097a4"
	}
}

$(window).on("load", function() {
	updateTheme();

	params = new URLSearchParams(window.location.search);

	if (params.get("sidebar")) {
		showSidebar = false;
	}

	shouldShowSidebar();
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
		miniSidebar = false;
	} else {
		$('#sidebar').css('width', '85px');
		miniSidebar = true;
	}
}

function updateTheme() {
	var theme = localStorage.getItem("theme");
	try {
		setThemeData(
			Themes[theme].sidebar,
			Themes[theme].body,
			Themes[theme].iconColor,
			Themes[theme].linkColor,
			Themes[theme].linkHover,
			Themes[theme].backingColor
		);
	} catch {
		setThemeData(
			Themes.white.sidebar,
			Themes.white.body,
			Themes.white.iconColor,
			Themes.white.linkColor,
			Themes.white.linkHover,
			Themes.white.backingColor
		);
	}
}

function setThemeData(sidebar, main, color, colorHover, filter, backingColor) {
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
	$(".hr").css("border-color", color);
	//$(".sidebar a:hover").css("color", colorHover);
	$(".theme-background").css("background", backingColor);
}

setTimeout(function() {
	var path = 0;
	switch(location.pathname) {
		case "/":
			path = 0;
			showSidebar = false;
			toggleDisplay("sidebar");
			break;
		case "/settings/":
			path = 1;
			break;
		case "/minecraft/":
			path = 4;
			break;
		case "/stars/":
			path = 6;
			break;
	};
	$("#sidebar").children("a")[path].href = "#/";
}, 100);

function shouldShowSidebar() {
	if (showSidebar) {
		$("#sidebar").css("display", "block");
		$("#main").addClass("margin85");
	} else {
		$("#sidebar").css("display", "none");
		$("#main").removeClass("margin85");
	}
}

setInterval(function() {
	shouldShowSidebar();
}, 100);

/**
 * Pass a string to convert all words to be capitalized.
 * @param {*} string The string to be converted
 * @param {*} bool Should spaces be included
 */
function strToUpperCase(string, bool) {
	words = string.split(" ");
	var ret;

	if(bool) {
		ret = words.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		}).join(" ");
	} else {
		ret = words.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		}).join("");
	}

	return ret;
}