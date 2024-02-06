// localStorage.clicks2 = 0
// localStorage.clicks1 = 0
// localStorage.darkMode = 0
var skillText = ["Crochet", "Baking", "Singing", "Digital Art", "Cooking", "Writing"];

function checkMode() {
	console.log("got here")
	console.log(localStorage.darkMode)
	if (localStorage.darkMode == 0) {
		console.log("light")
		LightMode();
	}
	else {
		console.log("dark");
		DarkMode();
	}
}
function like1() {
	document.getElementById("clicks1").innerHTML = localStorage.clicks1;

	if (localStorage.clicks1) {
		localStorage.clicks1 = Number(localStorage.clicks1) + 1;
	}
	else {
		localStorage.clicks1 = 1;
	}
	document.getElementById("clicks1").innerHTML = localStorage.clicks1;
};

function like2() {
	document.getElementById("clicks2").innerHTML = localStorage.clicks2;

	if (localStorage.clicks2) {
		localStorage.clicks2 = Number(localStorage.clicks2) + 1;
	}
	else {
		localStorage.clicks2 = 1;
	}
	document.getElementById("clicks2").innerHTML = localStorage.clicks2;
};


function ImgCh() {
	src = document.getElementById("Img1").src
	if (src.match('images/img1.jpg')) {
		document.getElementById("Img1").src = 'images/img2.jpg'
	}
	else if (src.match('images/img2.jpg')) {
		document.getElementById("Img1").src = 'images/img3.jpg'
	}
	else {
		document.getElementById("Img1").src = 'images/img1.jpg'
	}

};

function ColCh() {
	var x = document.getElementById("menucl");
	if (localStorage.darkMode == 0) {
		x.style.background = 'rgba(153, 51, 153, 1)';
	}
	else {
		x.style.background = 'Teal';
	}
}

function ColBk() {
	var x = document.getElementById("menucl");

	x.style.background = 'rgba(0,26,26,0)';

}
var menutop = document.getElementById("menucl");
var sticky = menutop.offsetTop;

function scrollfunc() {
	if (window.pageYOffset >= sticky) {
		menutop.classList.add("sticky")
	}
}

function toggleMode() {
	console.log("Clicked");
	if (localStorage.darkMode == 0) {
		localStorage.darkMode = 1;
		DarkMode();
		console.log(localStorage.darkMode);
	}
	else {
		localStorage.darkMode = 0;
		LightMode();
		console.log(localStorage.darkMode);
	}
}

function DarkMode() {
	document.body.style.backgroundImage = 'url("images/dark-bag.jpg")';
	document.body.style.color = 'MistyRose';

	var y = document.querySelectorAll('[id=post]');
	for (var i = 0; i < y.length; i++) {
		y[i].style.backgroundColor = 'Black';
		y[i].style.color = 'MistyRose';
	};

	var x = document.querySelectorAll('[id=comment]');
	for (var i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = 'Black';
		x[i].style.color = 'MistyRose';
	};
}

function LightMode() {
	document.body.style.backgroundImage = 'url("images/light-bag.jpg")';
	document.body.style.color = 'DarkSlateGrey';

	var y = document.querySelectorAll('[id=post]');
	for (var i = 0; i < y.length; i++) {
		y[i].style.backgroundColor = 'MistyRose';
		y[i].style.color = 'Black';
	};

	var x = document.querySelectorAll('[id=comment]');
	for (var i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = 'MistyRose';
		x[i].style.color = 'Black';
	};
}

function skillLoop() {
	console.log("Here");
	for (var i = 0; i < 1000; i++) {
		(function local(i) {
			setTimeout(function () {
			document.getElementById('skills').innerHTML = skillText[(i%(skillText.length))];
			console.log(skillText[i]);
			}, 1000 * i);
		})(i);
	};
}