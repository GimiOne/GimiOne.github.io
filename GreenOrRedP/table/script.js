let mainContainer = document.querySelector('#main-container');

//Делаем запрос для сбора данных для расписания
//var rebootCache = "?noCache=" + (new Date().getTime()) + Math.random().toFixed(3);
console.log(rebootCache);

$.ajax({
    url: '../admin/php/data.json'+rebootCache,
    type: 'GET',
    dataType: 'text',
    success: function (data) {
        main(JSON.parse(data))
    } 
  });


let daysOfWeek = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let monthes = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

function main(data){
	let groupG = data[data.directionNames[0][2]];
	let groupR = data[data.directionNames[0][3]];
  	document.onclick = function(e){selectDirection(e,data)}//Выбираем направление подготовки или сохраненяем информацию
  	generateDirections(data);//Генерируем табы
  	generateTable(daysOfWeek);//Генерируем поля для ввода Предметов/Преподавателей(параметры по умолчанию для 2-ой группы)
	getStorageAndFillTable();//Заполнение таблицы по направлению,которое было выбранно до перезагрузке
	
	
	//////////////Функции//////////////
	

  	function generateDirections(data){
  		document.querySelector('#pills-tab').innerHTML = '';
    	for(let i = 0;i<data.directionNames.length;i++){
    		document.querySelector('#pills-tab').innerHTML += `<li class="nav-item">
			    												<a id="${data.directionNames[i][1]}" class="nav-link" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">${data.directionNames[i][0]}</a>
			  											  	   </li>`;
		}	
    }


  	function generateTable(daysOfWeek){
	    mainContainer.innerHTML = '';
	    for(let i = 0;i<5;i++){
	    mainContainer.innerHTML += `<h2>${daysOfWeek[i]}</h2>
                 <hr>
                 <div class='table-responsive'>
                  <div class="borderBox">
                 <table class="table table-bordered table-hover">
                  <thead>
                    <tr class="text-center">
                      <th scope="col">#</th>
                      <th class="directName bg-success text-white" scope="col"></th>
					  <th class="directName bg-danger text-white" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                  	  <td class="GroupG"></td>
					  <td class="GroupR"></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td class="GroupG"></td>
					  <td class="GroupR"></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td class="GroupG"></td>
					  <td class="GroupR"></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td class="GroupG"></td>
					  <td class="GroupR"></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td class="GroupG"></td>
 					  <td class="GroupR"></td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td class="GroupG"></td>
					  <td class="GroupR"></td>
                    </tr>
                    
                  </tbody>
                </table> `;
	    }
	    mainContainer.innerHTML += `<hr style="border:1px dashed lightgrey" class="mt-5"/>`;
	 	//Генерируем поля для ввода/вывода чисел Красных и Зеленых недель
	 	// genarateNumbersOfMonthes(data);
  	}


  	function getStorageAndFillTable(){
		getStorage();
		for(let i = 0;i<data.directionNames.length;i++){
		  	if(document.querySelectorAll('.nav-link')[i].attributes[6].value === 'true'){
			    groupG = data[data.directionNames[i][2]];
			    groupR = data[data.directionNames[i][3]];
			    fillCells(groupG,groupR);
			    let directName = document.querySelectorAll('.directName');
			    for(let j = 0;j<directName.length;j++){
			  		directName[j].innerText = document.querySelectorAll('.nav-link')[i].innerText;
			  	}
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


  	function getStorage(){
  		let cache = localStorage.getItem('activeTab') ? localStorage.getItem('activeTab') : 0;
  		document.querySelectorAll('.nav-link')[cache].className = 'nav-link active show';
  		document.querySelectorAll('.nav-link')[cache].setAttribute('aria-selected',true);
  	}


  	function selectDirection(e,data){
	    for(let i = 0;i<data.directionNames.length;i++){
	  		if(e.target.id === data.directionNames[i][1]){
	  			groupG = data[data.directionNames[i][2]];
			    groupR = data[data.directionNames[i][3]]
			    localStorage.setItem('activeTab',i);
	  		}
	  	}
	    let directName = document.querySelectorAll('.directName');
	    for(let i = 0;i<data.directionNames.length;i++){
		  if(document.querySelectorAll('.nav-link')[i].attributes[6].value === 'true'){
		  	for(let j = 0;j<directName.length;j++){
		  		directName[j].innerText = document.querySelectorAll('.nav-link')[i].innerText;
		  	}
		  }
		}
	    fillCells(groupG,groupR);
  	}


	function fillCells(groupG,groupR){
  		let m = 0;
		for(let i = 0;i<5;i++){
			let c = 0;
			for(let j = m;j<(6+m);j++){
				let subjectNamesG = [];
				let subjectNamesR = [];
				subjectNamesG = groupG[i][c] === undefined ? '' : groupG[i][c].split('/');
				subjectNamesR = groupR[i][c] === undefined ? '' : groupR[i][c].split('/');
				console.log('subjectNamesG[0]'.split('/'));
				//e.target.innerHTML = subjectNames[0]+'<br><span style="font-size: 12px">'+subjectNames[1]+'</span>';
		        document.querySelectorAll('.GroupG')[j].innerHTML =  subjectNamesG[0] === '' ? '' : subjectNamesG[0]+(subjectNamesG[1] === undefined ? '' : '<br><span style="font-size: 12px">'+subjectNamesG[1]+'</span>');
		        document.querySelectorAll('.GroupR')[j].innerHTML =  subjectNamesR[0] === '' ? '' : subjectNamesR[0]+(subjectNamesR[1] === undefined ? '' : '<br><span style="font-size: 12px">'+subjectNamesR[1]+'</span>');
				c++;
		    }
		    m += 6;
		}
  	}
}

