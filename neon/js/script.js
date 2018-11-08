var canvas = document.getElementById('game');
var ctx  = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width);

// ctx.translate(canvas.width/2,canvas.height/2);
var x,y;
var a = 0;


document.onmousedown = function(event){
	ctx.moveTo(event.pageX,event.pageY);
	a = 0;
document.onmousemove = function(e){
	
    lol(e);
};
};


document.onmouseup = function(){
	a = 1;
	
};


function lol(e){
	if (a===0){
		w = e.pageX;
    	h = e.pageY;

	ctx.lineTo(w,h);
	ctx.strokeStyle = 'red';
	ctx.lineCap = "round"; 
	ctx.lineWidth = '10';
	ctx.stroke();
	
}else if(a===1){
	return;
	
}
	
}



	
	


