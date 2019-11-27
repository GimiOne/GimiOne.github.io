var canvas = document.getElementById('mainCanvas');
var html = document.getElementById('html');
canvas.width = 1000;
canvas.height = 700;
var ctx = canvas.getContext("2d");





ctx.moveTo(0,canvas.height/2);
var x = 1;
var y0 = canvas.height/2;
var y = 0;


var amp = 10;
var chas = 30;







document.body.onkeydown = function(e){
	if (e.keyCode===50){
		chas--;
		console.log(2);
	}else if (e.keyCode===49){
		chas++;
		console.log(1);
	}

	else if (e.keyCode===51){
		amp++;
		console.log(3);

	}
};







setInterval(lol,20);



function lol(){
	if (x < canvas.width){
		if (amp === 2){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
		x+=1;
		y=sin(x);
		ctx.lineTo(x,y + y0);
		ctx.stroke();
	}
}



function sin(x){
	return Math.sin(x/amp)*chas;
}



