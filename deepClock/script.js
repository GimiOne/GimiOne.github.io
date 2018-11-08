var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var wind = window.innerWidth;
var heig = window.innerHeight;
canvas.width = wind;
canvas.height = heig;






var clock = document.getElementById('clock');
var imgBack = document.getElementById('imgBack');
var date = new Date();
	var s = date.getSeconds();
	var m = date.getMinutes();
	var h = date.getHours();
	s = s < 10 ? "0"+s : s;
	m = m < 10 ? "0"+m : m;
	h = h < 10 ? "0"+h : h;
	clock.innerHTML = h+':'+m+':'+s;
function timeUpdate(){
	var date = new Date();
	var s = date.getSeconds();
	var m = date.getMinutes();
	var h = date.getHours();
	s = s < 10 ? "0"+s : s;
	m = m < 10 ? "0"+m : m;
	h = h < 10 ? "0"+h : h;
	clock.innerHTML = h+':'+m+':'+s;
}
setInterval(timeUpdate,50);




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
		
        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'black';

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
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
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



function Rect1(x,y,dx,dy,x1,x2){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.x1 = x1;
	this.x2 = x2;


	this.draw = function(){
		ctx.beginPath();
		ctx.strokeStyle = fillSt;
		ctx.fillRect(this.x,this.y,this.x1,this.x2);
		ctx.strokeWidth = '2';
		
		ctx.stroke();
	}
	
	this.update = function(){
		if(this.x+x1>canvas.width){
		this.dx = -this.dx;
	}
	if(this.x <0){
		this.dx = -this.dx;
	}
	if(this.y+x2>canvas.height){
		this.dy = -this.dy;
	}
	if(this.y<0){
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
	y = getRandomArbitrary(canvas.height/2-30,canvas.height/2);
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
for(let i = 0;i < howMuch;i++){
	x = getRandomArbitrary(canvas.width/2,canvas.width/2);
	y = y = getRandomArbitrary(canvas.height/2-30,canvas.height/2);
	x1 = Math.random()*60;
	x2 = Math.random()*60;;
	dx = Math.random()*deshki-(deshki/2);
	dy = Math.random()*deshki-(deshki/2);
	arrRects1.push(new Rect1(x,y,dx,dy,x1,x2))
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}





let krug = document.getElementById('krug');
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







var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);



setTimeout(ground,6000);
setTimeout(lox,8000);
setTimeout(changeColor,16100);

function changeColor(){
	fillSt = 'white';
	
}

function lox(){
	document.getElementById('lox').style.opacity = 1;
}

function ground(){
	document.body.style.backgroundColor = 'black';
	krug.style.display = 'none';
	
}


var isTrue = true;
function merch(){
	if(isTrue){
		document.getElementById('circ1').style.opacity = 1;
		isTrue = false;
	}else{
		document.getElementById('circ1').style.opacity = 0;
		isTrue = true;
	}
}

setInterval(lll,6000);

function lll(){
	setTimeout(merch,500);
	setTimeout(merch,4000);
	
}

var isTrue2 = true;
function merch2(){
	if(isTrue2){
		document.getElementById('circ2').style.opacity = 1;
		isTrue2 = false;
	}else{
		document.getElementById('circ2').style.opacity = 0;
		isTrue2 = true;
	}
}


setInterval(lll2,7000);

function lll2(){
	setTimeout(merch2,500);
	setTimeout(merch2,3000);
	
}


var isTrue3 = true;
function merch3(){
	if(isTrue3){
		document.getElementById('circ3').style.opacity = 1;
		isTrue3 = false;
	}else{
		document.getElementById('circ3').style.opacity = 0;
		isTrue3 = true;
	}
}

setInterval(lll3,4600);

function lll3(){
	setTimeout(merch3,500);
	setTimeout(merch3,1000);
	
}


var isTrue6 = true;
function merch6(){
	if(isTrue6){
		document.getElementById('circ6').style.opacity = 1;
		isTrue6 = false;
	}else{
		document.getElementById('circ6').style.opacity = 0;
		isTrue6 = true;
	}
}


setInterval(lll6,8000);

function lll6(){
	setTimeout(merch6,500);
	setTimeout(merch6,1000);
}




var isTrue9 = true;
function merch9(){
	if(isTrue9){
		document.getElementById('circ9').style.opacity = 1;
		isTrue9 = false;
	}else{
		document.getElementById('circ9').style.opacity = 0;
		isTrue9 = true;
	}
}


setInterval(lll9,5000);

function lll9(){
	setTimeout(merch9,800);
	setTimeout(merch9,5000);
	
}



function light(){
	
		document.getElementById('light').style.opacity = 1;
		
}



	setTimeout(light,8000);







var circ = document.getElementsByClassName('circ');

for(var i = 0;i<circ.length;i++){
	circ[i].style.marginTop = getRandomArbitrary(60,canvas.height-60)+'px';
	circ[i].style.marginLeft =getRandomArbitrary(60,canvas.width-60)+'px';
}



	



