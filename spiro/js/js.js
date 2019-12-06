var R=200,
	r=140,
	d=120,
	teta = 0,
	s,
	time = 10;

var canvas = document.getElementById('c1'),
	ctx = canvas.getContext('2d'),
	range1 = document.getElementById('range1'),
	range2 = document.getElementById('range2'),
	range3 = document.getElementById('range3'),
	range4 = document.getElementById('range4'),
	inp1 = document.getElementById('inp1'),
	inp2 = document.getElementById('inp2'),
	inp3 = document.getElementById('inp3'),
	inp4 = document.getElementById('inp4'),
	inpColor = document.getElementById('inp-color'),
	clear = document.getElementById('clear'),
	preloader = document.getElementById('preloader'),
	blkCircle = document.getElementById('blk-circle');


var panel = {
	clear: function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		teta=0;
		xPrev = (R-r)*Math.cos(teta) + d*Math.cos(((R-r)/r)*teta );
		yPrev = (R-r)*Math.sin(teta) - d*Math.sin(((R-r)/r)*teta );
	},
	stop: function(){
		isTrue = true;
	},
	start: function(){
		spiro();
		R = inp1.value;
		r = inp2.value;
		d = inp3.value;
		s = inp4.value;
		time = inp5.value;
	}
}


window.onload = function(){//Прелоадер скрывается при загрузке страницы
    preloader.style.opacity = '0';
    function hide(){
        preloader.style.display = 'none';
    }
    setInterval(hide,1000);
}




function inpRange(value,inp){
	if(inp === 'inp1'){
		R = value;
		inp1.value = R;
	}
	if(inp === 'inp2'){
		r = value;
		inp2.value = r;
	}
	if(inp === 'inp3'){
		d = value;
		inp3.value = d;
	}
	if(inp === 'inp4'){
		s = value;
		inp4.value = s;
	}
}

inp1.onblur = function(){
	R = inp1.value;
	range1.value = R;
}
inp2.onblur = function(){
	r = inp2.value;
	range2.value = r;
}
inp3.onblur = function(){
	d = inp3.value;
	range3.value = d;
}
inp4.onblur = function(){
	s = inp4.value;
	range4.value = s;
}
inp5.onblur = function(){
	time = inp5.value;
}




function inpText(event,value){
	if(event.keyCode === 13){
		if(inp1.value === value){
			R = value===''?200:value;
			range1.value = R;
		}
		if(inp2.value === value){
			r = value;
			range2.value = r;
		}
		if(inp3.value === value){
			d = value;
			range3.value = d;
		}
		if(inp4.value === value){
			s = value;
			range4.value = s;
		}
		if(inp5.value === value){
			time = value;
			
		}
	}
}


var color = inpColor.value;
blkCircle.style.border = "10px solid "+ color;
function changeColor(){
	color = inpColor.value;
	blkCircle.style.border = "10px solid "+ color;
}




var isTrue = false;
var isPravda = false;
var xPrev = (R-r)*Math.cos(teta) + d*Math.cos(((R-r)/r)*teta );
var yPrev = (R-r)*Math.sin(teta) - d*Math.sin(((R-r)/r)*teta );
function spiro(){
	var x = (R-r)*Math.cos(teta) + d*Math.cos( ((R-r)/r)*teta );
	var y = (R-r)*Math.sin(teta) - d*Math.sin( ((R-r)/r)*teta );
	teta = teta+0.1;
	ctx.fillStyle = color;
	ctx.beginPath();
	//ctx.arc(300+x, 300+y, s,0,Math.PI*2);
    ctx.moveTo(300+xPrev, 300+yPrev);
    ctx.lineTo(300+x, 300+y);
    ctx.lineWidth = s;
    ctx.stroke();
	if(isPravda){
		ctx.fill();
	}
	isPravda =true;
	if(isTrue){
		isTrue = false;
		return 0;
	}
	xPrev = x;
	yPrev = y;
	
	setTimeout(spiro,time);
}


document.getElementById('start').onclick = panel.start;//кнопка Старт
document.getElementById('stop').onclick = panel.stop;//кнопка Стоп
document.getElementById('clear').onclick = panel.clear;//кнопка Очистить


var isArrowDown = true;
document.getElementById('arrowForBlockContent').onclick = function(){
	if(isArrowDown){
		document.getElementById('arrowForBlockContent').style.transform = 'scale(1,-1)';
		document.getElementById('BlockContent').style.transform = 'scaleY(1)';
		document.getElementById('BlockContent').style.display = 'block';
		isArrowDown = false;
	}else{
		document.getElementById('arrowForBlockContent').style.transform = 'scale(1)';
		document.getElementById('BlockContent').style.transform = 'scaleY(0)';
		document.getElementById('BlockContent').style.display = 'none';
		isArrowDown = true;
	}
	
}






