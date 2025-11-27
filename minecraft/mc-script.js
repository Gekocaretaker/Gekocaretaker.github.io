
var collapsing = document.getElementsByClassName("collapseHeader");

for (var i = 0; i < collapsing.length; i++) {
	collapsing[i].addEventListener("click", function() {
		this.classList.toggle("collapsingActive");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

/* Music Disc Stuff */

const discBase = $("#discBase");
const discPattern = $("#discPattern");
const baseColors = $("#discBaseColors");
const patternColors = $("#discPatternColors");
const liveUpdate = $("#discLiveUpdate");
const forceUpdate = $("#discForceUpdate");
const downloadImageLink = $("#discDownloadImageLink");
const discName = $("#discName");

const layerTextures = $("#discLayerTextures");
const colorizeCanvas = $("#discColorizeCanvas");
const discCanvas = $("#discCanvas");

const discImage = $("#discImage");

liveUpdate.on("change", (event) => {
	if (liveUpdate.prop("checked")) {
		forceUpdate.css("display", 'none');
	} else {
		forceUpdate.css("display", 'inline-block');
	}
});

var baseColorPicker = iro.ColorPicker("#discBaseColors", {
	colors: [
		'#515151',
		'#ffffff',
		'#bbbbbb',
		'#bbbbbb'
	],
	layout: [
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'hue',
				layoutDirection: 'horizontal',
				activeIndex: 0
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'saturation',
				layoutDirection: 'horizontal',
				activeIndex: 0
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'value',
				layoutDirection: 'horizontal',
				activeIndex: 0
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'hue',
				layoutDirection: 'horizontal',
				activeIndex: 1
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'saturation',
				layoutDirection: 'horizontal',
				activeIndex: 1
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'value',
				layoutDirection: 'horizontal',
				activeIndex: 1
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'hue',
				layoutDirection: 'horizontal',
				activeIndex: 2
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'saturation',
				layoutDirection: 'horizontal',
				activeIndex: 2
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'value',
				layoutDirection: 'horizontal',
				activeIndex: 2
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'hue',
				layoutDirection: 'horizontal',
				activeIndex: 3
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'saturation',
				layoutDirection: 'horizontal',
				activeIndex: 3
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'value',
				layoutDirection: 'horizontal',
				activeIndex: 3
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'hue',
				layoutDirection: 'horizontal',
				activeIndex: 4
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'saturation',
				layoutDirection: 'horizontal',
				activeIndex: 4
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'value',
				layoutDirection: 'horizontal',
				activeIndex: 4
			}
		},
	],
	height: 150,
	borderWidth: 2,
	borderColor: "#8b8b8b"
});

var patternColorPicker = iro.ColorPicker("#discPatternColors", {
	colors: [
		'#515151',
		'#ffffff',
		'#bbbbbb'
	],
	layout: [
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'hue',
				layoutDirection: 'horizontal',
				activeIndex: 0
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'saturation',
				layoutDirection: 'horizontal',
				activeIndex: 0
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'value',
				layoutDirection: 'horizontal',
				activeIndex: 0
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'hue',
				layoutDirection: 'horizontal',
				activeIndex: 1
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'saturation',
				layoutDirection: 'horizontal',
				activeIndex: 1
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'value',
				layoutDirection: 'horizontal',
				activeIndex: 1
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'hue',
				layoutDirection: 'horizontal',
				activeIndex: 2
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'saturation',
				layoutDirection: 'horizontal',
				activeIndex: 2
			}
		},
		{
			component: iro.ui.Slider,
			options: {
				sliderType: 'value',
				layoutDirection: 'horizontal',
				activeIndex: 2
			}
		}
	],
	height: 150,
	borderWidth: 2,
	borderColor: "#8b8b8b"
});

discBase.on("change", (event) => {
	var count = getColorCount(discBase);
	if (count < 5) {
		baseColors.children().first().children().eq(12).css("display", 'none');
		baseColors.children().first().children().eq(13).css("display", 'none');
		baseColors.children().first().children().eq(14).css("display", 'none');
	} else {
		baseColors.children().first().children().eq(12).css("display", 'inline-block');
		baseColors.children().first().children().eq(13).css("display", 'inline-block');
		baseColors.children().first().children().eq(14).css("display", 'inline-block');
	}

	if (count < 4) {
		baseColors.children().first().children().eq(9).css("display", 'none');
		baseColors.children().first().children().eq(10).css("display", 'none');
		baseColors.children().first().children().eq(11).css("display", 'none');
	} else {
		baseColors.children().first().children().eq(9).css("display", 'inline-block');
		baseColors.children().first().children().eq(10).css("display", 'inline-block');
		baseColors.children().first().children().eq(11).css("display", 'inline-block');
	}

	if (count < 3) {
		baseColors.children().first().children().eq(6).css("display", 'none');
		baseColors.children().first().children().eq(7).css("display", 'none');
		baseColors.children().first().children().eq(8).css("display", 'none');
	} else {
		baseColors.children().first().children().eq(6).css("display", 'inline-block');
		baseColors.children().first().children().eq(7).css("display", 'inline-block');
		baseColors.children().first().children().eq(8).css("display", 'inline-block');
	}

	if (count < 2) {
		baseColors.children().first().children().eq(3).css("display", 'none');
		baseColors.children().first().children().eq(4).css("display", 'none');
		baseColors.children().first().children().eq(5).css("display", 'none');
	} else {
		baseColors.children().first().children().eq(3).css("display", 'inline-block');
		baseColors.children().first().children().eq(4).css("display", 'inline-block');
		baseColors.children().first().children().eq(5).css("display", 'inline-block');
	}

	if (count < 1) {
		baseColors.children().first().children().eq(0).css("display", 'none');
		baseColors.children().first().children().eq(1).css("display", 'none');
		baseColors.children().first().children().eq(2).css("display", 'none');
	} else {
		baseColors.children().first().children().eq(0).css("display", 'inline-block');
		baseColors.children().first().children().eq(1).css("display", 'inline-block');
		baseColors.children().first().children().eq(2).css("display", 'inline-block');
	}

	if (liveUpdate.prop("checked")) {
		updateDiscImage();
	}
});

discPattern.on("change", (event) => {
	var count = getColorCount(discPattern);
	if (count < 3) {
		patternColors.children().first().children().eq(6).css("display", 'none');
		patternColors.children().first().children().eq(7).css("display", 'none');
		patternColors.children().first().children().eq(8).css("display", 'none');
	} else {
		patternColors.children().first().children().eq(6).css("display", 'inline-block');
		patternColors.children().first().children().eq(7).css("display", 'inline-block');
		patternColors.children().first().children().eq(8).css("display", 'inline-block');
	}

	if (count < 2) {
		patternColors.children().first().children().eq(3).css("display", 'none');
		patternColors.children().first().children().eq(4).css("display", 'none');
		patternColors.children().first().children().eq(5).css("display", 'none');
	} else {
		patternColors.children().first().children().eq(3).css("display", 'inline-block');
		patternColors.children().first().children().eq(4).css("display", 'inline-block');
		patternColors.children().first().children().eq(5).css("display", 'inline-block');
	}

	if (count < 1) {
		patternColors.children().first().children().eq(0).css("display", 'none');
		patternColors.children().first().children().eq(1).css("display", 'none');
		patternColors.children().first().children().eq(2).css("display", 'none');
	} else {
		patternColors.children().first().children().eq(0).css("display", 'inline-block');
		patternColors.children().first().children().eq(1).css("display", 'inline-block');
		patternColors.children().first().children().eq(2).css("display", 'inline-block');
	}

	if (liveUpdate.prop("checked")) {
		updateDiscImage();
	}
});

forceUpdate.on("click", (event) => {
	updateDiscImage();
});

baseColorPicker.on("color:change", (color) => {
	if (liveUpdate.prop("checked")) {
		updateDiscImage();
	}
});

patternColorPicker.on("color:change", (color) => {
	if (liveUpdate.prop("checked")) {
		updateDiscImage();
	}
});

discName.on("change input", (event) => {
	var nameValue = discName.prop("value");
	nameValue = nameValue.toLowerCase().replace(/[^a-z0-9_]/g, '_');
	discName.prop("value", nameValue);
	if (nameValue == "") {
		nameValue = "mellohi";
	}
	var newName = "music_disc_" + nameValue + ".png";
	downloadImageLink.prop("download", newName);
});

function getColorCount(selector) {
	return parseInt(selector.children()[selector.prop("selectedIndex")].dataset.colorCount);
}

function updateDiscImage() {
	discCanvas[0].getContext("2d").clearRect(0, 0, 16, 16);

	var layerCount = getColorCount(discBase);
	if (layerCount >= 1) {
		drawLayer(discBase[0].options[discBase.prop("selectedIndex")].dataset.layer1, baseColorPicker, 0);
	}
	if (layerCount >= 2) {
		drawLayer(discBase[0].options[discBase.prop("selectedIndex")].dataset.layer2, baseColorPicker, 1);
	}
	if (layerCount >= 3) {
		drawLayer(discBase[0].options[discBase.prop("selectedIndex")].dataset.layer3, baseColorPicker, 2);
	}
	if (layerCount >= 4) {
		drawLayer(discBase[0].options[discBase.prop("selectedIndex")].dataset.layer4, baseColorPicker, 3);
	}
	if (layerCount >=5) {
		drawLayer(discBase[0].options[discBase.prop("selectedIndex")].dataset.layer5, baseColorPicker, 4);
	}

	layerCount = getColorCount(discPattern);
	if (layerCount >= 1) {
		drawLayer(discPattern[0].options[discPattern.prop("selectedIndex")].dataset.layer1, patternColorPicker, 0);
	}
	if (layerCount >= 2) {
		drawLayer(discPattern[0].options[discPattern.prop("selectedIndex")].dataset.layer2, patternColorPicker, 1);
	}
	if (layerCount >= 3) {
		drawLayer(discPattern[0].options[discPattern.prop("selectedIndex")].dataset.layer3, patternColorPicker, 2);
	}

	setTimeout(function () {
		discImage.prop("src", discCanvas[0].toDataURL());
		downloadImageLink.prop("href", discCanvas[0].toDataURL());
	}, 10);
}

function drawLayer(layer, usedColorPicker, index) {
	var colorizeContext = colorizeCanvas[0].getContext("2d");
	var discContext = discCanvas[0].getContext("2d");

	colorizeContext.clearRect(0, 0, 16, 16);
	colorizeContext.drawImage(document.getElementById(layer), 0, 0, 16, 16);
	var imgDataSrc = colorizeContext.getImageData(0, 0, 16, 16);
	var imgData = imgDataSrc.data;
	for (var i = 0; i < imgData.length; i += 4) {
		imgData[i] = ((imgData[i] / 255) * (usedColorPicker.colors[index].red / 255)) * 255;
		imgData[i + 1] = ((imgData[i + 1] / 255) * (usedColorPicker.colors[index].green / 255)) * 255;
		imgData[i + 2] = ((imgData[i + 2] / 255) * (usedColorPicker.colors[index].blue / 255)) * 255;
	}
	colorizeContext.putImageData(imgDataSrc, 0, 0);
	discContext.drawImage(colorizeCanvas[0], 0, 0);
}

function getImagePiece(name) {
	return "textures/" + name + ".png"
}

function newImg(name) {
	var ret = new Image(16, 16);
	ret.src = getImagePiece(name);
	return ret;
}

addEventListener("load", () => {
	baseColors.children().first().children().eq(6).css("display", 'none');
	baseColors.children().first().children().eq(7).css("display", 'none');
	baseColors.children().first().children().eq(8).css("display", 'none');
	baseColors.children().first().children().eq(9).css("display", 'none');
	patternColors.children().first().children().eq(0).css("display", 'none');
	patternColors.children().first().children().eq(1).css("display", 'none');
	patternColors.children().first().children().eq(2).css("display", 'none');
	patternColors.children().first().children().eq(3).css("display", 'none');
	patternColors.children().first().children().eq(4).css("display", 'none');
	patternColors.children().first().children().eq(5).css("display", 'none');
	patternColors.children().first().children().eq(6).css("display", 'none');
	patternColors.children().first().children().eq(7).css("display", 'none');
	patternColors.children().first().children().eq(8).css("display", 'none');

	discBase.prop("selectedIndex", 0);
	discBase.trigger('change');
	discPattern.prop("selectedIndex", 0);
	discPattern.trigger('change');
	discName.prop("value", "");
	liveUpdate.prop("checked", true);
	forceUpdate.css("display", 'none');

	updateDiscImage();
});