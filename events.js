var pageTitle = document.getElementById('page-title'),
	keypressInput = document.getElementById('keypress-input'),
	articleSection = document.getElementsByClassName('article-section'),
	guineaPig = document.getElementById('guinea-pig'),
	addColor = document.getElementById('add-color'),
	makeLarge = document.getElementById('make-large'),
	addBorder = document.getElementById('add-border'),
	addRounding = document.getElementById('add-rounding'),
	outputTarget = document.getElementById('output-target');

// 1
for (var i = 0; i < articleSection.length; i++) {
	articleSection[i].onclick = function(event) {
		outputTarget.innerHTML = `<p>You clicked on the ${event.target.innerHTML} section</p>`;
	}
}

// 2
pageTitle.onmouseover = function() {
	outputTarget.innerHTML = "You moved your mouse over the header";
}

// 3
pageTitle.onmouseout = function() {
	outputTarget.innerHTML = "You left me!!";
}

// 4
keypressInput.onkeyup = function() {
	outputTarget.innerHTML = keypressInput.value;
}

// 5
addColor.onclick = function() {
	guineaPig.classList.add('blue')
}

// 6
makeLarge.onclick = function() {
	guineaPig.classList.add('hulk')
}

// 7
addBorder.onclick = function() {
	guineaPig.classList.add('capture')
}

// 8
addRounding.onclick = function() {
	guineaPig.classList.add('rounded')
}
