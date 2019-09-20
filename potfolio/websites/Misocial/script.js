function downArrow(){

var height = window.innerHeight;
window.scrollTo(0,height);
}


let isTrue = true;
function btnMenu(){
	if(isTrue){
		var mMenu = document.getElementById('m-menu');
		var cMenu = document.getElementById('close-menu');
		var allP = document.getElementById('allpage');

		mMenu.style.transform = 'scaleX(1)';
		allP.style.filter = 'blur(20px)';
		
	}else{
		var mMenu = document.getElementById('m-menu');
		var allP = document.getElementById('allpage');
		mMenu.style.transform = 'scaleX(1)';
		allP.style.filter = 'blur(0)';
		isTrue = true;
	}
	
}

var cMenu = document.getElementById('close-menu');
cMenu.onmousedown = function(){
	var mMenu = document.getElementById('m-menu');
	var allP = document.getElementById('allpage');
	allP.style.filter = 'blur(0)';
	mMenu.style.transform = 'scaleX(0)';
}



var links = document.getElementsByClassName('menu-link');
links.onclick = function(){
	var mMenu = document.getElementById('m-menu');
	var allP = document.getElementById('allpage');
	allP.style.filter = 'blur(0)';
	mMenu.style.transform = 'scaleX(0)';
}