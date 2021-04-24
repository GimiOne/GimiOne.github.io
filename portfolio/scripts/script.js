let preload = document.querySelector('#preloader');
let portfolio = document.querySelector('#portfolio');
let contacts = document.querySelector('#contacts');
let btnMenu = document.querySelector('#btn-menu');
let btnClose = document.querySelector('#btn-close');
let mMenu = document.querySelector('#m-menu');
let blur = document.querySelector('#blur');
let spinner = document.querySelector('#spinner');
let pluses = document.querySelector('.pluses');
let plus = document.querySelectorAll('.plus');



let isDisplayNone = true;
let count = 0;
let id;
btnMenu.onclick = ()=>{
	mMenu.style.transform = 'scaleX(1)';
	mMenu.style.backdropFilter = 'blur(10px)';
	pluses.style.display = 'block';
}

document.onclick = (e)=>{
	if(e.target.id === 'm-menu' || e.target.id === 'btn-close'){
		mMenu.style.transform = 'scaleX(0)';
		blur.style.filter = 'none';
		pluses.style.display = 'none';
	}
}

// let plusesScroll = 0;

// document.onscroll = (e)=>{
// 	// console.log(window.pageYOffset);
// 	let huh = -(window.pageYOffset * 20 / 100);
	
// 	pluses.style.transform = 'translateY('+huh+'px)';

// }

window.onload = () =>{
	preload.style.opacity = 0;
	setTimeout(()=>{
		preload.style.display = 'none';
		mMenu.style.transition = '.3s';
	},1000);
	
}



let plusesXCoord = [20,85,40,20,80,45,10,70,60,40];

for(let i = 0;i < plusesXCoord.length;i++){
	plus[i].style.marginLeft = window.innerWidth*(plusesXCoord[i]/100)+'px';
}








