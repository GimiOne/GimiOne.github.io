var mainb = document.getElementById('mainb');
function scale(){
	document.getElementById('podmainb').style.transform = "scale(1)";
	mainb.style.transform = "rotate(360deg)";
	mainb.style.transition = ".5s";
	mainb.style.background = "red";

}


function scaleNorm(){
	document.getElementById('podmainb').style.transform = "scale(0)";
	mainb.style.transform = "rotate(0deg)";
	mainb.style.background = "black";
	mainb.style.transition = ".5s";
}

var mainb2 = document.getElementById('mainb2');
function scale2(){

	document.getElementById('podmainb2').style.transform = "scale(1)";
	mainb2.style.transform = "rotate(90deg)";
	mainb2.style.transition = ".5s";
	mainb2.style.background = "red";

}


function scaleNorm2(){
	document.getElementById('podmainb2').style.transform = "scale(0)";
	mainb2.style.transform = "rotate(0deg)";
	mainb2.style.background = "black";
	mainb2.style.transition = ".5s";
}



