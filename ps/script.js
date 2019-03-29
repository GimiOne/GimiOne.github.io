let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let widthCanvas = canvas.width;
let heightCanvas = canvas.height;
let ranges = document.querySelector('#ranges');
let R_range = document.querySelector('#R');
let G_range = document.querySelector('#G');
let B_range = document.querySelector('#B');
let contrastVar = document.querySelector('#contrast');
let fileImg = document.querySelector('#fileImg');


let img = new Image();
img.src = '2.jpg';

let pix = [];
let r = [],g = [],b = [];



//Main
img.onload = function(){
	let heightImgForCanvas =  imageResize(canvas.width,img);
	canvas.height = heightImgForCanvas;
	canvas.style.height = canvas.height + 'px';
	console.log(heightImgForCanvas);
	ctx.drawImage(img,0,0,canvas.width,heightImgForCanvas);
	img_data=ctx.getImageData(0,0,img.width,img.height);
	pix=img_data.data;
	for(let i = 0, n = pix.length; i < n; i++) {
		r.push(pix[i]);
	    g.push(pix[i + 1]);
	    b.push(pix[i + 2]);
	}
	ctx.putImageData(img_data,0, 0);
}//End Main

let R_channel = 50,G_channel = 50,B_channel = 50,contrastt = 50;



document.oninput = function(e){
		if(e.target.id === 'R'){
			R_channel = +R_range.value;
		}else if(e.target.id === 'G'){
			G_channel = +G_range.value;
		}else if(e.target.id === 'B'){
			B_channel = +B_range.value;
		}else if(e.target.id === 'contrast'){
			contrastt = +contrastVar.value;
		}
		changeRGB(R_channel,G_channel,B_channel,contrastt);
		ctx.putImageData(img_data,0,0);
	
	
	
	
}



fileImg.onchange = function(e){
	console.log(fileImg.value);
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


