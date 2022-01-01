function init() {
	
	var colors = ["red", "blue", "pink", "purple", "green", "yellow", "white", "black"];

	var randcolor = Math.floor(Math.random()*100);

	if (randcolor > 90) {
		document.getElementById("bg").style.backgroundColor = "red";
	}else if (randcolor >= 80) {
		document.getElementById("bg").style.backgroundColor = "blue";
	}else if (randcolor >= 70) {
		document.getElementById("bg").style.backgroundColor = "green";
	}else if (randcolor >= 60) {
		document.getElementById("bg").style.backgroundColor = "yellow";
	}else if (randcolor >= 50) {
		document.getElementById("bg").style.backgroundColor = "white";
	}else if (randcolor >= 40) {
		document.getElementById("bg").style.backgroundColor = "black";
	}else if (randcolor >= 30) {
		document.getElementById("bg").style.backgroundColor = "purple";
	}else if (randcolor >= 20) {
		document.getElementById("bg").style.backgroundColor = "orange";
	}else if (randcolor >= 10) {
		document.getElementById("bg").style.backgroundColor = "pink";
	}

}