var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var wind = window.innerWidth;
var heig = document.documentElement.scrollHeight;
canvas.width = wind+50;
canvas.height = document.documentElement.scrollHeight+50;







var scene = document.getElementById('canvas');
var parallaxInstance = new Parallax(scene);



var x = 300, y = 50;
var dx = 10, dy = 10,radius = 50;
var fillSt = 'black';



function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;


	this.draw = function(){
		ctx.beginPath();
		
		
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
		
        // ctx.fillStyle = 'black';
        ctx.strokeStyle = 'white';

		// ctx.fill();
		ctx.stroke();
	}
	
	this.update = function(){
		if(this.x + this.radius>canvas.width){
		this.dx = -this.dx;
	}
	if(this.x - this.radius<0){
		this.dx = -this.dx;
	}
	if(this.y+this.radius>canvas.height){
		this.dy = -this.dy;
	}
	if(this.y-this.radius<0){
		this.dy = -this.dy;
	}
	this.y += this.dy;
	this.x += this.dx;
	this.draw();
	}
	
	
}

function Circle2(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;


	this.draw = function(){
		ctx.beginPath();
		ctx.fillStyle = 'transparent';
		ctx.strokeStyle = fillSt;
		ctx.fillRect(this.x,this.y,this.radius,0,Math.PI*2);
		ctx.fill();
		ctx.stroke();
	}
	
	this.update = function(){
		if(this.x + this.radius>canvas.width){
		this.dx = -this.dx;
	}
	if(this.x - this.radius<0){
		this.dx = -this.dx;
	}
	if(this.y+this.radius>canvas.height){
		this.dy = -this.dy;
	}
	if(this.y-this.radius<0){
		this.dy = -this.dy;
	}
	this.y += this.dy;
	this.x += this.dx;
	this.draw();
	}
	
	
}




	
	



var howMuch = 100;
var deshki = 1.1;
var arr1Circles =[];
for(let i = 0;i < howMuch;i++){
	x = getRandomArbitrary(canvas.width/2,canvas.width/2);
	y = getRandomArbitrary(400,400);
	radius = Math.random()*60;
	dx = Math.random()*deshki-(deshki/2);

	dy = Math.random()*deshki-(deshki/2);
	arr1Circles.push(new Circle(x,y,dx,dy,radius))
}


var arr2Circles =[];
for(let i = 0;i < howMuch;i++){
	x = getRandomArbitrary(canvas.width/2,canvas.width/2);
	y = y = getRandomArbitrary(canvas.height/2-30,canvas.height/2);
	radius = Math.random()*30;
	dx = Math.random()*deshki-(deshki/2);
	dy = Math.random()*deshki-(deshki/2);
	arr2Circles.push(new Circle2(x,y,dx,dy,radius))
}


var arrRects1 =[];
// for(let i = 0;i < howMuch;i++){
// 	x = getRandomArbitrary(canvas.width,canvas.width);
// 	y = y = getRandomArbitrary(canvas.height/2-30,canvas.height/2);
// 	x1 = Math.random()*60;
// 	x2 = Math.random()*60;;
// 	dx = Math.random()*deshki-(deshki/2);
// 	dy = Math.random()*deshki-(deshki/2);
// 	arrRects1.push(new Rect1(x,y,dx,dy,x1,x2))
// }

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}






let scale = 1;
function update(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(let i = 0;i < arr1Circles.length;i++){
	arr1Circles[i].update();
	}

	// for(let i = 0;i < arr2Circles.length;i++){
	// arr2Circles[i].update();
	// }
	
	if(scale<500){
		scale++;
	}
	
	requestAnimationFrame(update);
}
update();