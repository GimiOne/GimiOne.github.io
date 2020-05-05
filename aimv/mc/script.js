var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var rectColor = document.querySelector('#rectColor');
var numInput = document.querySelector('#numInput');
var buttonWithout = document.querySelector('#buttonWithout');
var results = document.querySelectorAll('.results');
var img = new Image();

// img.height =1000;
img.src = 'yandexSea.png';

img.width = 1000;

canvas.height = img.height;
img.height = img.height/(img.width/1000);
canvas.style.width = img.width+'px';
canvas.style.height = img.height+'px';

var img_data;


img.onload = function(){
	ctx.drawImage(img,0,0,img.width,img.height);
	img_data=ctx.getImageData(0,0,img.width,img.height);
	
}




buttonWithout.onclick = function(){
	changeIterations(numInput.value);
}

function changeIterations(value){
	ctx.clearRect(0,0,img.width,img.height);
	ctx.drawImage(img,0,0,img.width,img.height);
	var result = areaMonteKarlo(value);
	results[0].innerHTML = 'Площадь фигуры: '+ result.middleS+'(км2)';
	results[1].innerText = 'Число попаданий: ' + result.mMiddle;
	results[2].innerText = 'Число бросков: ' + result.iterations;
	results[3].innerText = 'Погрешность: ' + result.fault+'(км2)';
}



var widthRect = 1180;
var heightRect = 665;
function areaMonteKarlo(iterations){
var m = 0,n = 0,N = 5,nSum = 0,mSum = 0;
var S = 0;
var SquareS = 0;
	for(var i = 0;i<N;i++){
		m = 0,n=0;
		ctx.clearRect(0,0,img.width,img.height);
		ctx.drawImage(img,0,0,img.width,img.height);
		for(var j = 0;j<iterations;j++){
		var x=parseInt(Math.random()*img.width);
	    var y=parseInt(Math.random()*img.height);
	    	var pix=img_data.data;
		    var z=((y*img.width)+x)*4;//ищет в объекте Image индекс точки, принадлежащей точке (х,y).
		    var R=pix[z];
		    var G=pix[z+1];
		    var B=pix[z+2];
		    ctx.fillStyle = 'lightblue';
			ctx.fillRect(x,y,2,2);
			if(R === 255 && (G >= 0 && G <= 180) && (B >= 0 && B <= 180)){
				m++;
			}
		    n++;
		}
	mSum += m;
	S += (widthRect*heightRect)*m/n;
	SquareS += Math.pow(((widthRect*heightRect)*m/n),2);
	}

var mMiddle = mSum/N;
var middleS = S/N;
var middleSquareS = SquareS/N;
var fault = Math.sqrt(middleSquareS-(middleS*middleS));
return {middleS,iterations,mMiddle,fault};
}