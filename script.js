window.addEventListener("load", function(event) {

	let red = document.getElementById('sliderRed');
	red.oninput = function updateTextInputRed()  {
		document.getElementById('textRed').value = red.value;
		updateColor();
	}

	let blue = document.getElementById('sliderBlue');
	blue.oninput = function()  {
		document.getElementById('textBlue').value = blue.value;
		updateColor();
	}

	let green = document.getElementById('sliderGreen');
	green.oninput = function()  {
		document.getElementById('textGreen').value = green.value;
		updateColor();
	}

	function updateColor() {
		document.querySelector('#colorRGB').style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
	}


});
