var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');	
canvas.width = window.innerWidth-30;
canvas.height = window.innerHeight;


ctx.miterLimit = 1;
ctx.lineCap = 'round'
ctx.lineWidth = 2;


var color = document.getElementById('color');
ctx.strokeStyle = color.value;
var rangeWidth = document.getElementById('range');


rangeWidth.oninput = function(){
	ctx.lineWidth = rangeWidth.value;
}


color.oninput = function(){
	ctx.strokeStyle = color.value;
}

document.getElementById('clear').onmousedown = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('clearka').onmousedown = function(){
	ctx.strokeStyle = "white";
}

document.getElementById('brush').onmousedown = function(){
	ctx.shadowColor = color.value;
	ctx.strokeStyle = color.value;
}

document.getElementById('buttons').onmousedown = function(e){
	document.getElementsByClassName('border')[0].style.border = '2px solid transparent';
	document.getElementsByClassName('border')[0].style.color = 'black';
	document.getElementsByClassName('border')[1].style.border = '2px solid transparent';
	document.getElementsByClassName('border')[1].style.color = 'black';
	e.target.style.border = '2px solid cadetblue';
	e.target.style.color = '#296471';

}



canvas.addEventListener('touchstart', function(e) {
ctx.lineWidth = rangeWidth.value;
ctx.beginPath();
ctx.moveTo(e.changedTouches[0].pageX-5,e.changedTouches[0].pageY-85);
	canvas.addEventListener('touchmove', function(e) {
		e.preventDefault();
		ctx.lineTo(e.changedTouches[0].pageX-5,e.changedTouches[0].pageY-85);
		ctx.lineJoin = 'miter';
		ctx.stroke();
	}, false);
}, false);


canvas.onmousedown = function(e){
	ctx.lineWidth = rangeWidth.value;
	ctx.beginPath();
	ctx.moveTo(e.offsetX,e.offsetY);
	canvas.onmousemove = function(e) {
		e.preventDefault();
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.lineTo(e.offsetX,e.offsetY);
		ctx.stroke();
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
	}
}







function xxx(x,y,x1,y1){
		this.x = x;
		this.y = y;
		this.x1 = x1;
		this.y1 = y1;
		//ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.strokeRect(this.x,this.y = y,this.x1 = x1,this.y1 = y1);
		ctx.stroke();
		setInterval(xxx,1000/60)
}

let figure =  document.getElementById('figure');

figure.onmousedown = function(){
	canvas.onmousedown = function(ev){
	
	ctx.beginPath();
	let x = ev.offsetX,y = ev.offsetY;
	canvas.onmousemove = function(e) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		e.preventDefault();
		 xxx(x,y,e.offsetX-x,e.offsetY-y);
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
	}
}
}