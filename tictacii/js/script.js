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


var obj = [];
var rofl = 0;
var ask = 0;


var pustoe = {
	m: 0
}

var hodK = 0;
var hodC = 0; 
var hod = 0;
game.onmouseup = function(e){
	if (e.target.className == 'block' && rofl === 0){
		
			var mom = e.target.innerHTML = '<div class="podblock1"><div class="circle"></div></div>';
			hod++;
			var rand = parseInt(Math.random()*8);
			
			var solo = 0;
			var molo = 0;
				
			rofl = 1;
			checkWinner();
	}if (rofl === 1){
		for(var i = 0;i<9;i++){
					if(block[i].innerHTML === ''){
						
							
							obj[ask] = i;
						ask++;
						

						
					}
				}
				
				if (obj.length != 0){
					console.log("lol");
					setTimeout(xsa,200,obj);
					
				}else{
					checkWinner();
				}
				
				
				
			
		
		ask = 0;
		obj = [];
		rofl = 0;
	}
			
			

	
};


function xsa(obj){
	var rand = Math.floor(Math.random() * obj.length);
	if (allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		allblocks[1].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[2].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[2].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}
		
	}else if (allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
			allblocks[2].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[1].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[1].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[3].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[5].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[5].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[5].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[3].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[3].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[5].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[3].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[4].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[4].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[7].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[8].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[8].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[7].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[6].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[6].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[7].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[7].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[8].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[8].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[0].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[0].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[4].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[4].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[3].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[6].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[6].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[3].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[0].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[0].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[0].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[3].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[3].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[1].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[7].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[7].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[7].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[1].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[1].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[1].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[7].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[4].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[4].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[2].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[5].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[8].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[8].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[5].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[2].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[2].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[2].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[8].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[5].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[5].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[2].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[6].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[6].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[2].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[4].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[4].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}else if (allblocks[6].innerHTML == '<div class="podblock1"><div class="circle"></div></div>' &&
		 allblocks[4].innerHTML == '<div class="podblock1"><div class="circle"></div></div>'){
		if (document.getElementsByClassName('block')[2].innerHTML != ''){
			document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}else{
			document.getElementsByClassName('block')[2].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
		}

	}




	else{
		document.getElementsByClassName('block')[obj[rand]].innerHTML = '<div class="podblock2"><div class="x1"><div class="x2"></div></div></div>';
	}
	
	checkWinner();
}

















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
	
		
	rofl = 0;






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
		document.getElementsByClassName('window')[0].style.transform = 'scale(1)';
		document.getElementsByClassName('window')[0].innerHTML = "Ничья";
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
	
	
}


function closes(){
	document.getElementsByClassName('window')[0].style.transform = 'scale(0)';

	for(var i = 0;i < 9;i++){
			allblocks[i].innerHTML = '';
		}
}