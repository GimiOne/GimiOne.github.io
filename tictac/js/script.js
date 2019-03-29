var game = document.getElementById('game');
var block = document.getElementsByClassName('block');
for(var i = 0;i < 9;i++){
	var lol = document.getElementById('game').innerHTML += '<div class="block"></div>';
}


block[0].style.borderTop = "none";
block[0].style.borderLeft = "none";
block[1].style.borderTop = "none";
block[2].style.borderRight = "none";
block[2].style.borderTop = "none";
block[3].style.borderLeft = "none";
block[5].style.borderRight = "none";
block[6].style.borderLeft = "none";
block[6].style.borderBottom = "none";
block[7].style.borderBottom = "none";
block[8].style.borderBottom = "none";
block[8].style.borderRight = "none";








var hod = 0;
game.onmouseup = function(e){
	if (e.target.className == 'block'){
		if (hod%2===0){
			e.target.innerHTML = '<div class="podblock1"><div class="circle"></div></div>';
			hod++;
			document.getElementsByClassName('header')[0].innerHTML = 'Крестики x Нолики';
			checkWinner();
		}else{
			
			e.target.innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div>';
			hod++;
			document.getElementsByClassName('header')[0].innerHTML = 'Крестики o Нолики';
			checkWinner();
		}
		
		
	}
};







var allblocks = '';
var nol = 1;
var xxx = 1;
function checkWinner(){
	allblocks = document.getElementsByClassName('block'); 
	
	if ((allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
	 	allblocks[1].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' && 
	 	allblocks[2].innerHTML == '<div class="podblock1"><div class="circle"></div></div>')
	 	||
	 	(allblocks[3].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
	 	allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' && 
	 	allblocks[5].innerHTML == '<div class="podblock1"><div class="circle"></div></div>')
	 	||
	 	(allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
	 	allblocks[7].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' && 
	 	allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>')
	 	||
	 	(allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
	 	allblocks[3].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' && 
	 	allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>')
	 	||
	 	(allblocks[1].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
	 	allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' && 
	 	allblocks[7].innerHTML == '<div class="podblock1"><div class="circle"></div></div>')
	 	||
	 	(allblocks[2].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
	 	allblocks[5].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' && 
	 	allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>')
	 	||
	 	(allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
	 	allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' && 
	 	allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>')
	 	||
	 	(allblocks[2].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
	 	allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' && 
	 	allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>')){
		circles();
	hod = 0;
	document.getElementsByClassName('o')[0].innerHTML = 'Нолики: '+ nol +'';
	nol++;
	document.getElementsByClassName('header')[0].innerHTML = 'Крестики o Нолики';
	}else if ((allblocks[0].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' &&
	 	allblocks[1].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' && 
	 	allblocks[2].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>')
	 	||
	 	(allblocks[3].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' &&
	 	allblocks[4].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' && 
	 	allblocks[5].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>')
	 	||
	 	(allblocks[6].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' &&
	 	allblocks[7].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' && 
	 	allblocks[8].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>')
	 	||
	 	(allblocks[0].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' &&
	 	allblocks[3].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' && 
	 	allblocks[6].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>')
	 	||
	 	(allblocks[1].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' &&
	 	allblocks[4].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' && 
	 	allblocks[7].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>')
	 	||
	 	(allblocks[2].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' &&
	 	allblocks[5].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' && 
	 	allblocks[8].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>')
	 	||
	 	(allblocks[0].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' &&
	 	allblocks[4].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' && 
	 	allblocks[8].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>')
	 	||
	 	(allblocks[2].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' &&
	 	allblocks[4].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>' && 
	 	allblocks[6].innerHTML == '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>')){
		lala();
		hod = 0;
		document.getElementsByClassName('x')[0].innerHTML = 'Крестики: '+ xxx +'';
		document.getElementsByClassName('header')[0].innerHTML = 'Крестики o Нолики';
		xxx++;
		
		////////////////НИЧЬЯ////////////////
	}else if(allblocks[0].innerHTML != '' && 
			 allblocks[1].innerHTML != '' &&
			 allblocks[2].innerHTML != '' &&
			 allblocks[3].innerHTML != '' &&
			 allblocks[4].innerHTML != '' &&
			 allblocks[5].innerHTML != '' &&
			 allblocks[6].innerHTML != '' &&
			 allblocks[7].innerHTML != '' &&
			 allblocks[8].innerHTML != '') {
		nich();
	}

}

function lala(){
	document.getElementsByClassName('window')[0].style.transform = 'scale(1)';
	document.getElementsByClassName('window')[0].innerHTML = "Выиграли Крестики";
	
}

function circles(){
	document.getElementsByClassName('window')[0].style.transform = 'scale(1)';
	document.getElementsByClassName('window')[0].innerHTML = "Выиграли Нолики";
	
}


function nich(){
	document.getElementsByClassName('window')[0].style.transform = 'scale(1)';
	document.getElementsByClassName('window')[0].innerHTML = "Ничья";
	
}


function closes(){
	document.getElementsByClassName('window')[0].style.transform = 'scale(0)';
	for(var i = 0;i < 9;i++){
		allblocks[i].innerHTML = '';
	}
}