var audio = document.getElementById('audio');
var pause = document.getElementById('pause');
var move = document.getElementById('move');
var slider = document.getElementById('slider');
var pau = document.getElementById('pau');
var play = document.getElementById('play');
var i = 0;
var l = 0;
pause.onclick = function(){
	if(i===0){
		audio.play();
		moveSlider();
		i = 1;
		l = 3
		pau.style.opacity = "1";
		play.style.opacity = "0";
	}else{
		audio.pause();
		i = 0;
		l = 4;
		pau.style.opacity = "0";
		play.style.opacity = "1";
	}
	
};


function lol(){
	if (l === 3){
		slider.value = audio.currentTime;
		console.log(Math.floor (audio.currentTime));
		var color1 = Math.floor (audio.currentTime);
		document.getElementById('htmll').style.backgroundColor = "rgb(" + color1 + ",45," + color1+23 + ")";
		document.getElementById('muz').style.backgroundColor = "rgb(" + color1 + ",45," + color1+23 + ")";
		document.getElementById('htmll').style.transition = "0.8s";
		document.getElementById('muz').style.transition = "0.8s";
	}else if (l === 4){
		return;
	}
}
setInterval(lol,1000);


function moveSlider(){
	var dur = audio.duration;
	slider.max = dur;
}

slider.oninput = function(){
	audio.currentTime = slider.value;
};