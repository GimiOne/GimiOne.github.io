let preload = document.querySelector('#preloader');
let portfolio = document.querySelector('#portfolio');
let contacts = document.querySelector('#contacts');
let btnMenu = document.querySelector('#btn-menu');
let btnClose = document.querySelector('#btn-close');
let mMenu = document.querySelector('#m-menu');
let blur = document.querySelector('#blur');
let spinner = document.querySelector('#spinner');


let isDisplayNone = true;
let count = 0;
let id;
btnMenu.onclick = ()=>{
	mMenu.style.transform = 'scaleX(1)';
	blur.style.filter = 'blur(20px)';
}

document.onclick = (e)=>{
	if(e.target.id === 'm-menu' || e.target.id === 'btn-close'){
		mMenu.style.transform = 'scaleX(0)';
		blur.style.filter = 'none';
	}

	// else if(e.target.className === 'link-conts'){
	// 	preload.style.opacity = 0;
	// 	preload.style.display = 'flex';
	// 	setTimeout(()=>{
	// 		preload.style.opacity = 1;
	// 	},10);
	// 	setTimeout(()=>{
	// 		location.href = 'contacts.html';
	// 	},1);
	// }else if(e.target.className === 'link-main'){
	// 	preload.style.opacity = 0;
	// 	preload.style.display = 'flex';
	// 	setTimeout(()=>{
	// 		preload.style.opacity = 1;
	// 	},10);
	// 	setTimeout(()=>{
	// 		location.href = 'index.html';
	// 	},1);
	// }else if(e.target.className === 'link-about'){
	// 	preload.style.opacity = 0;
	// 	preload.style.display = 'flex';
	// 	setTimeout(()=>{
	// 		preload.style.opacity = 1;
	// 	},10);
	// 	setTimeout(()=>{
	// 		location.href = 'aboutme.html';
	// 	},1);
	// }
	
}




window.onload = () =>{
	preload.style.opacity = 0;
	setTimeout(()=>{
		preload.style.display = 'none';
		mMenu.style.transition = '.3s';
	},1000);
	
}



