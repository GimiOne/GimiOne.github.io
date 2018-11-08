

function over(content){
	console.log(content);
	document.getElementById(content).style.transform = "scale(1)";
};

function out(content){
	document.getElementById(content).style.transform = "scale(0)";
};