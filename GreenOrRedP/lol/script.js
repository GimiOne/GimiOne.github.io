let mainContainer = document.querySelector('#main-container');
let table = document.querySelector('#table');





// var rebootCache = "?noCache=" + (new Date().getTime()) + Math.random().toFixed(3);
console.log(localStorage.getItem('cache'));
$.ajax({
url: '../admin/php/data.json?noCache='+localStorage.getItem('cache'),
type: 'GET',
dataType: 'text',
success: function (data) {
    main(JSON.parse(data))
} 
});





let daysOfWeek = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let monthes = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
function main(data){

	generateCells(data);
	function generateCells(data){
		table.innerHTML = '';
		for(let i =0;i<5;i++){
			table.innerHTML += `<thead>
                    <tr><td rowspan="3" style="font-weight: bold">День</td></tr>
                    <tr class="text-center theadGreen"></tr>
                  </thead>
                  <tbody>
                    <tr><td class="vertical" rowspan="7"><p>${daysOfWeek[i]}</p></td></tr>
                    <tr class="GORRow1"></tr>
                    <tr class="GORRow"></tr>
                    <tr class="GORRow"></tr>
                    <tr class="GORRow"></tr>
                    <tr class="GORRow"></tr>
                    <tr class="GORRow"></tr>
                  </tbody>`;
			document.querySelectorAll('.GORRow1')[i].innerHTML = '';
	        document.querySelectorAll('.GORRow1')[i].innerHTML += `<th scope="row">1</th>`;
	        for(let j =1;j<=data.directionNames.length;j++){
	        	let group = 'Group'+j+'G';
	        	document.querySelectorAll('.GORRow1')[i].innerHTML += `<td class="${group}"></td>`;     	
			}
			document.querySelectorAll('.GORRow1')[i].innerHTML += `<td class="vertical" rowspan="7"><p>${daysOfWeek[i]}</p></td>
	                      											<th scope="row">1</th>`;
			
			for(let j =1;j<=data.directionNames.length;j++){
	        	let group = 'Group'+j+'R';
	        	document.querySelectorAll('.GORRow1')[i].innerHTML += `<td class="${group}"></td>`;     	
			}

			///LOL

			document.querySelectorAll('.theadGreen')[i].innerHTML += `<th class="anyu" scope="col">#</th>`;
			for(let j =0;j<data.directionNames.length;j++){
	        	document.querySelectorAll('.theadGreen')[i].innerHTML += `<th class="bg-success text-white"  scope="col">${data.directionNames[j][0]}</th>`;     	
			}
			document.querySelectorAll('.theadGreen')[i].innerHTML += `<th>День</th><th scope="col">#</th>`;
			for(let j =0;j<data.directionNames.length;j++){
	        	document.querySelectorAll('.theadGreen')[i].innerHTML += `<th class="bg-danger text-white"  scope="col">${data.directionNames[j][0]}</th>`;     	
			}
			
            
		}

		
		let m = 0;
		for(let a =0;a<5;a++){
			for(let i =2;i<=6;i++){
				document.querySelectorAll('.GORRow')[m].innerHTML += `<th scope="row">${i}</th>`;
		        for(let j =1;j<=data.directionNames.length;j++){
		        	let group = 'Group'+j+'G';
		        	document.querySelectorAll('.GORRow')[m].innerHTML += `<td class="${group}"></td>`;     	
				}
				document.querySelectorAll('.GORRow')[m].innerHTML += `<th scope="row">${i}</th>`;
				for(let j =1;j<=data.directionNames.length;j++){
		        	let group = 'Group'+j+'R';
		        	document.querySelectorAll('.GORRow')[m].innerHTML += `<td class="${group}"></td>`;     	
				}
				m++;
			}
		}
	}


  	generateInputs(data);
  	function generateInputs(data){
		let countGroups = 0;
		for(let outer = 0;outer<5;outer++){
			for(let i = 0;i<6;i++){
				for(let j = 1;j<=data.directionNames.length;j++){
					let groupCount = '.Group'+j+'G';
					let groupCount1 = '.Group'+j+'R';
					document.querySelectorAll(groupCount)[countGroups].innerHTML = data[data.directionNames[j-1][2]][outer][i].split('/')[0] + (data[data.directionNames[j-1][2]][outer][i].split('/')[1] === undefined ? '' : '<br><span style="font-size: 12px;font-weight:400">'+data[data.directionNames[j-1][2]][outer][i].split('/')[1]+'</span>');
					document.querySelectorAll(groupCount1)[countGroups].innerHTML = data[data.directionNames[j-1][3]][outer][i].split('/')[0] + (data[data.directionNames[j-1][3]][outer][i].split('/')[1] === undefined ? '' : '<br><span style="font-size: 12px;font-weight:400">'+data[data.directionNames[j-1][3]][outer][i].split('/')[1]+'</span>');
				}
				countGroups++;
			}
	    }
  	}
  	
  
  	function genarateNumbersOfMonthes(week){
	  	//Начинаем генерировать поля ввода/вывода
	  	//WeekGreen inputs
	    mainContainer.innerHTML += `<div class="mt-5 text-success"><h2>Числа зеленых недель</h2><hr /></div>`;
	    for(let i = 0;i<monthes.length;i++){
	    	let weekInput = 'weekInp'+i;
	    	mainContainer.innerHTML += `<div class="d-flex month"><h6 class="align-self-end" style="width:130px">${monthes[i]}<hr /></h6><input class="${weekInput} form-control" type="text" value=""></div>`;
	    }
	    //weekRed inputs
		mainContainer.innerHTML += `<div class="mt-5 text-danger"><h2>Числа красных недель</h2><hr /></div>`;
	    for(let i = monthes.length;i<24;i++){
	    	let weekInput = 'weekInp'+i;
	    	mainContainer.innerHTML += `<div class="d-flex month"><h6 class="align-self-end" style="width:130px">${monthes[i-12]}<hr /></h6><input class="${weekInput} form-control" type="text" value=""></div>`;
	    }
	    //end genarate inputs
	    for(let i = 0;i<week.greenWeek.length;i++){
		    let weekInput = '.weekInp'+i;
		    for(let j = 0;j<week.greenWeek[i].length;j++){
		    	if(j !== week.greenWeek[i].length-1){
		    		document.querySelector(weekInput).value += week.greenWeek[i][j]+',';
		    	}else{
		    		document.querySelector(weekInput).value += week.greenWeek[i][j];
		    	}
		    }
		}
		//end weekGreen
	    for(let i = 0;i<week.redWeek.length;i++){
		    let weekInput = '.weekInp'+(i+12);
		    for(let j = 0;j<week.redWeek[i].length;j++){
		    	if(j !== week.redWeek[i].length-1){
		    		document.querySelector(weekInput).value += week.redWeek[i][j]+',';
		    	}else{
		    		document.querySelector(weekInput).value += week.redWeek[i][j];
		    	}
		    }
		}
		let weekInput = document.querySelector('.weekInp1').value.split(',');
		//end weekGreen
  	}

}


