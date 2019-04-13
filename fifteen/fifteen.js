(function(){
	"use strict";
	var STATE = 1;//It starts out in order.STATE=1 means in order.STATE =0 means out of order.
	var isPC = true;
	var isInterval = true;
	var idTimer;	
	var counter = 0;
	// Creates solved puzzle
    // solve();
    
    window.onload=function(){
    	

		
        var puzzlearea = document.getElementById('puzzlearea');
		 solve();
        document.getElementById('puzzlearea').onmousedown = function(e){
document.getElementById('timess').style.innerHTML = '5';
        	
        	console.log(1);
            if(STATE == 1){
            	counter++;
            	
            	if(isInterval){
            		idTimer = setInterval(timeUpdate,1000);
            		isInterval = false;
            	}

                // Enables sliding animation
                puzzlearea.className = 'animate';
                shiftelement(e.target);
            }
        }

        document.getElementById('puzzlearea').ontouchstart = function(e){
            if(STATE == 1){
            	if(isInterval){
            		idTimer = setInterval(timeUpdate,1000);
            		isInterval = false;
            	}
                // Enables sliding animation
                puzzlearea.className = 'animate';
                shiftelement(e.target);
                console.log('touch');
            }
        }

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    		document.getElementById('puzzlearea').onmousedown = null;
	  	} else {
	    	document.getElementById('puzzlearea').ontouchstart = null;
	  	}
	    document.getElementById('shufflebutton').addEventListener('mousedown', scramble);
		
		setTimeout(scramble,500);
    	
	};
	

var sec = 1;
var min = 0;
	function timeUpdate(){
		if(sec === 59){
			sec = 0;
			min++;		
		}
    	document.getElementById('timer').innerText = leadZero(min) +':'+ leadZero(sec);
    	sec++;
    }

function leadZero(n) { return (n < 10 ? '0' : '') + n; }
	/**
	 * Creates solved puzzlearea
	 *
	 */
	function solve(){
		var time = performance.now();
		var puzzlearea = document.getElementById('puzzlearea');
		if(STATE == 0){
			return;
		}
		puzzlearea.innerHTML = "";
		var n = 1;
		for(var i = 0; i <= 3; i++){
			for(var j = 0; j <= 3; j++){
				var element = document.createElement('div');
				element.id = 'element-'+i+'-'+j;
				element.style.left = (j*85+1*j+1)+'px';
                element.style.top = (i*85+1*i+1)+'px';
				if(n <= 15){
					element.classList.add('number');
					switch(n){
						case 1:element.classList.add('first');break;
						case 2:element.classList.add('second');break;
						case 3:element.classList.add('third');break;
						case 4:element.classList.add('fourth');break;
						case 5:element.classList.add('fifth');break;
						case 6:element.classList.add('sixth');break;
						case 7:element.classList.add('seventh');break;
						case 8:element.classList.add('eighth');break;
						case 9:element.classList.add('ninth');break;
						case 10:element.classList.add('tenth');break;
						case 11:element.classList.add('eleventh');break;
						case 12:element.classList.add('twelfth');break;
						case 13:element.classList.add('thirteenth');break;
						case 14:element.classList.add('fourteenth');break;
						case 15:element.classList.add('fifteenth');break;
					}
					element.innerHTML = (n++).toString();

				} else {
					element.className = 'empty';
				}
				puzzlearea.appendChild(element);


			}
		}
		
		 console.log(performance.now()-time)
	}

	/**
	 * Shifts number element to the empty element
	 * 
	 */
	function shiftelement(element){
		// Checks if selected element has number
		if(element.clasName != 'empty'){
			// Tries to get empty adjacent element
			var emptyelement = getEmptyAdjacentelement(element);
			if(emptyelement){
				// Temporary data
				var tmp = {style: element.style.cssText, id: element.id};
				// Exchanges id and style values
				element.style.cssText = emptyelement.style.cssText;
				element.id = emptyelement.id;
				emptyelement.style.cssText = tmp.style;
				emptyelement.id = tmp.id;
				if(STATE == 1){
					// Checks the order of numbers
					checkOrder();
				}
			}
		}
	}

	/**
	 * Gets specific element by row and column
	 *
	 */
	function getelement(row, col){
		return document.getElementById('element-'+row+'-'+col);
	}

	/**
	 * Gets empty element
	 *
	 */
	function getEmptyelement(){
		return document.getElementById('puzzlearea').querySelector('.empty');
	}
	
	/**
	 * Gets empty adjacent element if it exists
	 *
	 */
	function getEmptyAdjacentelement(element){

		// Gets all adjacent elements
		var adjacent = getAdjacentelements(element);
		// Searches for empty element
		for(var i = 0; i < adjacent.length; i++){
			if(adjacent[i].className == 'empty'){
				return adjacent[i];
			}
		}
		// Empty adjacent element was not found
		return false;
	}

	/**
	 * Gets all adjacent elements
	 *
	 */
	function getAdjacentelements(element){
		
		var id = element.id.split('-');
		// Gets element position indexes
		var row = parseInt(id[1]);
		var col = parseInt(id[2]);
		var adjacent = [];
		
		// Gets all possible adjacent elements
		if(row < 3){adjacent.push(getelement(row+1, col));}			
		if(row > 0){adjacent.push(getelement(row-1, col));}
		if(col < 3){adjacent.push(getelement(row, col+1));}
		if(col > 0){adjacent.push(getelement(row, col-1));}
		return adjacent;
	}
	
	/**
	 * Chechs if the order of numbers is correct
	 *
	 */
	
	function checkOrder(){
		
		// Checks if the empty element is in correct position
		if(getelement(3, 3).className != 'empty'){
			return;
		}
	
		var n = 1;
		// Goes through all elements and checks numbers
		for(var i = 0; i <= 3; i++){
			for(var j = 0; j <= 3; j++){
				if(n <= 15 && getelement(i, j).innerHTML != n.toString()){
					// Order is not correct
					return;
				}
				n++;
			}
		}
		
		// puzzlearea is solved, offers to scramble it
		
			 var winlose = document.getElementById('winlose');
			
			winlose.style.transform = 'scale(1)';
			clearInterval(idTimer);

			winlose.onclick = function(){
				isInterval = true;
				sec = 1;
				min = 0;
				timer.style.innerText = '00:00';
				winlose.style.transform = 'scale(0)';
				scramble();
			
			
		}
	
	}

	/**
	 * Scrambles puzzlearea
	 *
	 */
	function scramble(){
	
		if(STATE == 0){
			return;
		}
		
		document.getElementById('puzzlearea').removeAttribute('class');
		STATE = 0;
		
		var previouselement;
		var i = 1;
		var interval = setInterval(function(){
			if(i <= 100){
				var adjacent = getAdjacentelements(getEmptyelement());
				if(previouselement){
					for(var j = adjacent.length-1; j >= 0; j--){
						if(adjacent[j].innerHTML == previouselement.innerHTML){
							adjacent.splice(j, 1);
						}
					}
				}
				// Gets random adjacent element and memorizes it for the next iteration
				previouselement = adjacent[rand(0, adjacent.length-1)];
				shiftelement(previouselement);
				i++;
			} else {
				
				STATE = 1;
			}
		}, 5);

	}
	
	/**
	 * Generates random number
	 *
	 */
	function rand(from, to){return Math.floor(Math.random() * (to - from + 1)) + from;}

}());


document.getElementById('back1').style.background = 'radial-gradient('+localStorage.getItem('bggrad')+')';

let divs = document.getElementsByTagName('div');
let h1s = document.getElementsByTagName('h1');
let butt = document.getElementById('shufflebutton');
let winlosee = document.getElementById('winlose');





isHave = 1;
document.getElementById('theme1').onclick = function(){
	if(isHave===1){
		
		document.getElementById('back1').style.background = 'radial-gradient(#010221,black)';
		localStorage.setItem('bggrad', '#010221,black');
		for (var i = 2; i < divs.length; i++) {
			divs[i].style.borderColor = 'white';
			divs[i].style.background = 'none';
			divs[i].style.color = 'white';
			divs[i].style.textShadow = '0px 0px 5px white';
			h1s[0].style.color = 'white';
			h1s[0].style.borderColor = 'white';
			h1s[0].style.boxShadow = '0 0 10px white';
			butt.style.borderColor = 'white';
			butt.style.color = 'white';
			winlose.style.boxShadow = '0 0 20px white';
		}
		isHave++;
	}else if(isHave===2){
		
		var color = '#03CBFC';
		localStorage.setItem('bggrad', '#010221,black');
		
		document.getElementById('back1').style.background = 'radial-gradient('+localStorage.getItem('bgcolor')+')';
		for (var i = 5; i < divs.length; i++) {
			
			divs[i].style.background = 'none';
			divs[i].style.borderColor = '#03CBFC';
			
			divs[i].style.color = '#03CBFC';
			divs[i].style.textShadow = '0px 0px 5px #03CBFC';
			h1s[0].style.color = '#03CBFC';
			h1s[0].style.borderColor = '#03CBFC';
			h1s[0].style.boxShadow = '0 0 20px #03CBFC';
			butt.style.borderColor = '#03CBFC';
			butt.style.color = '#03CBFC';
			winlose.style.boxShadow = '0 0 20px #03CBFC';
			
		}
		isHave++;
	}else if(isHave===3){
		document.getElementById('back1').style.background = 'white';
		localStorage.setItem('bggrad', 'white,white');
		
		for (var i = 2; i < divs.length; i++) {
			divs[i].style.borderColor = 'black';
			divs[i].style.color = 'black';
			divs[i].style.textShadow = '0px 0px 5px white';
			
			h1s[0].style.color = 'black';
			h1s[0].style.borderColor = 'black';
			h1s[0].style.boxShadow = '0 0 10px white';
			butt.style.borderColor = 'black';
			butt.style.color = 'black';
			winlosee.style.boxShadow = '0 0 20px black';
			winlosee.style.background = 'none';
			winlosee.style.color = 'black';
		}
		isHave++;
		}else if(isHave===4){
		document.getElementById('back1').style.background = 'white';
		localStorage.setItem('bggrad', 'white,white');
		for (var i = 2; i < divs.length; i++) {
			divs[i].style.borderColor = '#03CBFC';
			divs[i].style.color = '#03CBFC';
			divs[i].style.textShadow = '0px 0px 50px #03CBFC';
			h1s[0].style.color = '#03CBFC';
			h1s[0].style.borderColor = '#03CBFC';
			h1s[0].style.boxShadow = 'none';
			butt.style.borderColor = '#03CBFC';
			butt.style.color = '#03CBFC';
			winlose.style.boxShadow = '0 0 20px #03CBFC';
		}
		isHave++;
	}else if(isHave===5){
		document.getElementById('back1').style.background = 'radial-gradient(rgb(255,0,0),rgb(120,0,0))';
		localStorage.setItem('bggrad', 'rgb(255,0,0),rgb(120,0,0)');
		for (var i = 2; i < divs.length; i++) {
			divs[i].style.borderColor = 'white';
			divs[i].style.color = 'white';
			divs[i].style.textShadow = '0px 0px 5px white';
			
			h1s[0].style.color = 'white';
			butt.style.color = 'white';
			butt.style.borderColor = 'white';
			h1s[0].style.borderColor = 'white';
			h1s[0].style.boxShadow = '0 0 10px white';
			winlosee.style.boxShadow = '0 0 30px white';
			winlosee.style.background = 'rgba(0,0,0,.1)';
		}
		isHave++;
	}else if(isHave===6){
		document.getElementById('back1').style.background = 'radial-gradient(rgb(255,0,0),rgb(120,0,0))';
		localStorage.setItem('bggrad', 'rgb(255,0,0),rgb(120,0,0)');
		
		for (var i = 5; i < divs.length; i++) {
			divs[i].style.borderColor = 'black';
			divs[i].style.color = 'black';
			divs[i].style.textShadow = 'none';
			h1s[0].style.color = 'black';
			h1s[0].style.borderColor = 'black';
			h1s[0].style.boxShadow = '0 0 10px rgba(0,0,0,.0)';
			butt.style.color = 'black';
			butt.style.borderColor = 'black';
			winlosee.style.boxShadow = '0 0 20px black';
			winlosee.style.background = 'none';
		}
		isHave = 1;
	}
	
	
}














