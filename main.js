
inEpilepsy = false;

document.getElementById("epilepsyMode").addEventListener("click", () => {
    if (!inEpilepsy) {
    	epilepsyMode(true);
    	inEpilepsy = false;
    }else{
    	epilepsyMode(false);
    	inEpilepsy = true;
    }
})

function init() {
	
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

	var i = 0;
	var ad = document.getElementById("ad");
	var epilepsyMode = document.getElementById("epilepsyMode");

	var timer = setInterval(function() {

		if (i >= 3) {
			clearInterval(timer)
			ad.style.display = "inline";
			epilepsyMode.style.display = "inline";
		}else{
			i++;
		}

	}, 1000)

}

function epilepsyMode(activate) {

	if (activate == true) {

		var timer = setInterval(function() {

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

			}, 50)

	}else{

		clearInterval(timer);

	}

}