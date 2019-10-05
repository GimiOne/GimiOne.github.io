let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let widthCanvas = canvas.width;
let heightCanvas = canvas.height;
let ranges = document.querySelector('#ranges');
let R_range = document.querySelector('#R');
let G_range = document.querySelector('#G');
let B_range = document.querySelector('#B');
let contrastVar = document.querySelector('#contrast');
let gradientInp = document.querySelector('#gradient');
let gradientInp2 = document.querySelector('#gradient2');
let gradX0 = document.querySelector('#gradX0');
let gradY0 = document.querySelector('#gradY0');

let rgbButton = document.querySelector('#rgbButton');
let gradientButton = document.querySelector('#gradientButton');
let contrastButton = document.querySelector('#contrastButton');
let contrastBlock =  document.querySelector('#contrastBlock');
let gradientBlock =  document.querySelector('#gradientBlock');
let rGBChannals =  document.querySelector('#RGB-channelsBlock');
let isTrue = true;
rgbButton.onclick = function(){
	if(isTrue){
		rGBChannals.style.display = 'block';
		isTrue = false;
	}else{
		rGBChannals.style.display = 'none';
		isTrue = true;
	}
}

let contr = true;
contrastButton.onclick = function(){
	if(contr){
		contrastBlock.style.display = 'block';
		contr = false;
	}else{
		contrastBlock.style.display = 'none';
		contr = true;
	}
}

let isGrad = true;
gradientButton.onclick = function(){
	if(isGrad){
		gradientBlock.style.display = 'block';
		isGrad = false;
	}else{
		gradientBlock.style.display = 'none';
		isGrad = true;
	}
}


let img = new Image();
img.src = '2.jpg';

let pix = [];
let r = [],g = [],b = [];



//Main
img.onload = function(){
	let heightImgForCanvas =  imageResize(canvas.width,img);
	canvas.height = heightImgForCanvas;
	canvas.style.height = canvas.height + 'px';

	ctx.drawImage(img,0,0,canvas.width,heightImgForCanvas);
	var img_data=ctx.getImageData(0,0,img.width,img.height);
	pix=img_data.data;
	for(let i = 0, n = pix.length; i < n; i++) {
		r.push(pix[i]);
	    g.push(pix[i + 1]);
	    b.push(pix[i + 2]);
	}
	ctx.putImageData(img_data,0, 0);
}//End Main

let R_channel = 50,G_channel = 50,B_channel = 50,contrastt = 50;



let grad = 'blue';
document.oninput = function(e){
	//console.log(gradient.value);
		if(e.target.id === 'R'){
			R_channel = +R_range.value;
		}else if(e.target.id === 'G'){
			G_channel = +G_range.value;
		}else if(e.target.id === 'B'){
			B_channel = +B_range.value;
		}else if(e.target.id === 'contrast'){
			contrastt = +contrastVar.value;
		}else if(e.target.id === 'gradient'){
			
			
		}
		changeRGB(R_channel,G_channel,B_channel,contrastt);
		ctx.putImageData(img_data,0,0);
		
}



let firstColor = 'transparent';
let secondColor = 'transparent';
let gradx0 = '30';
let grady0 = '50';
gradientBlock.onchange = function(e){
	if(e.target.id = 'gradient'){
		firstColor = gradientInp.value;
		linaerGradient(gradx0,grady0,firstColor,secondColor);
	}if(e.target.id = 'gradient2'){
		secondColor = gradientInp2.value;
		linaerGradient(gradx0,grady0,firstColor,secondColor);
		console.log(secondColor);
	}
}

gradientBlock.oninput = function(e){
	if(e.target.id = 'gradX0'){
		gradx0 = gradX0.value;
		linaerGradient(gradx0,grady0,firstColor,secondColor);
	}if(e.target.id = 'gradY0'){
		grady0 = gradY0.value;
		linaerGradient(gradx0,grady0,firstColor,secondColor);
	}
}





function linaerGradient(x,y,firstColor,secondColor){
	gradient = ctx.createLinearGradient(x,y, canvas.width, canvas.height);
    gradient.addColorStop(0, firstColor);
    gradient.addColorStop(1, secondColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}



function changeRGB(R,G,B,contrast){
	let ratio = 0.02;
	let Rc = R*ratio;
	let Gc = G*ratio;
	let Bc = B*ratio;
	let cont = contrast*ratio;
		for(let i = 0, n = pix.length; i < n; i += 4) {
			pix[i]     = r[i]*Rc*cont; // red
		    pix[i + 1] = g[i]*Gc*cont; // green
		    pix[i + 2] = b[i]*Bc*cont; // blue
		}
	}


function imageResize(widthCanvas,img){
	return img.height*widthCanvas/img.width;
}


