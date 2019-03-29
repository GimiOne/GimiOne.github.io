let symbol = document.querySelector('#symbol');
let arrSybols = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
let arrBackgrounds = ['#ff0036','#0fff00','lightblue','cadetblue','yellow','pink','orange','#0dda00','cyan','#de00ff','#ff00c6','#0f6','#00b668','#b69400','#b63300','#b60047','#acb430','#b46330','#ffbc91','#fffa91','#9fff91','#91ffd8','#91b1ff','#ba91ff','#ff9191','#953e3e','#8f643a','#638f3a','#2d7b84','#53297b','#986262','#629870','#757171'];


let ran = parseInt(Math.random()*33);
symbol.innerText = arrSybols[ran];
document.body.style.backgroundColor = arrBackgrounds[ran];


let isTouch = false;
document.onclick = function(){
	if(!isTouch){
		let ran = parseInt(Math.random()*33);
		symbol.innerText = arrSybols[ran];
		document.body.style.backgroundColor = arrBackgrounds[ran];
	}
}

document.ontouchend = function(){
	isTouch = true;
	let ran = parseInt(Math.random()*33);
	symbol.innerText = arrSybols[ran];
	document.body.style.backgroundColor = arrBackgrounds[ran];
}