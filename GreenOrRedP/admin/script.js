let mainContainer = document.querySelector('#main-container'),
tableColumns = document.querySelector('#table-columns'),
message = document.querySelector('#message'),
login = document.querySelector('#login'),
pass = document.querySelector('#pass'),
btnAuth = document.querySelector('#btn-auth'),
saveme = document.querySelector('#saveme');
let loginVal,passVal;
let isAddButton = false;
let isPressedChange = false;
let isPressedAddBtn = false;
let daysOfWeek = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let monthes = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];


btnAuth.onclick = auth;

pass.onkeypress = function(e){
  if(e.keyCode == '13') auth();
}


function auth(){
  $.ajax({
    url: 'php/auth.php',
    type: 'POST',
    dataType: 'text',
    data: {login: login.value, pass: pass.value},
    success: function (data) {
        if(data == 1){
          loginVal = login.value;
          passVal = pass.value;
          document.querySelector('#formAuth').style.display = 'none';
          document.querySelector('#hide-data').style.display = 'block';
          var rebootCache = "?noCache=" + (new Date().getTime()) + Math.random().toFixed(3);
          $.ajax({
            url: 'php/data.json'+rebootCache,
            type: 'GET',
            dataType: 'text',
            success: function (data) {
                main(JSON.parse(data))
            } 
          });
        }else{
          alert('Неверно введенные данные');
        }
    } 
  });
}




function main(data){
	let GTable = data[data.directionNames[0][2]];
	let RTable = data[data.directionNames[0][3]];

  	//Выбираем направление подготовки или сохраненяем информацию
  	showDirections(data,false);
  	document.onclick = function(e){selectDirection(e)}

  	//Генерируем поля для ввода Предметов/Преподавателей(параметры по умолчанию для 2-ой группы)
  	generateInputs();
  	fillInputs(GTable,RTable);


  	function showDirections(data,whatTabShows){
  		document.querySelector('#pills-tab').innerHTML = '';
    	for(let i = 0;i<data.directionNames.length;i++){
    		document.querySelector('#pills-tab').innerHTML += `<li class="nav-item">
			    												<a id="${data.directionNames[i][1]}" class="nav-link" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">${data.directionNames[i][0]}</a>
			  											  	   </li>`;
		}
		document.querySelector('#pills-tab').innerHTML += `<li class="nav-item">
			    												<a id="addDirection" class="nav-link" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Изменить</a>
			  											  	   </li>`;
 		if(whatTabShows){
 			document.querySelectorAll('.nav-link')[document.querySelectorAll('.nav-link').length-1].className = 'nav-link show active';
 		}else{
 			document.querySelectorAll('.nav-link')[0].className = 'nav-link show active';
 		}
    }

    function addDirection(data,direction,keyName){
    	let id = '#'+keyName;
    	if(document.querySelector(id) === null){
    		document.querySelector('#pills-tab').innerHTML += `<li class="nav-item">
			    												<a id="${keyName}" class="nav-link" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">${direction}</a>
			  											  	   </li>`;
    	}
    }

  
  	function generateInputs(){
	    mainContainer.innerHTML = '';
	    for(let i = 0;i<5;i++){
	    mainContainer.innerHTML += `<div class="tables row" >
	                                  <div class="col-lg-6 col-sm-12" id="table-columns${i+1}">
	                                    <div class="left-day d-flex justify-content-between">
	                                      <h3 class="text-left">${daysOfWeek[i]}</h3>
	                                      <h5 class="text-success align-self-end">Зеленая</h5>
	                                    </div><hr />
	                                  </div>
	                                  <div class="col-lg-6 col-sm-12" id="table-columns${i+6}">
	                                    <h5 style="margin-top:39px" class="text-danger text-right">Красная</h5>
	                                    <hr /></div>
	                                  </div>`;
	    for(let j = 0;j<6;j++){
	        let str = '#table-columns'+(i+1);
	        let inputId = 'input'+(i+1);
	        document.querySelector(str).innerHTML += `<input id="${inputId}" class="input form-control" type="text" value="">`;
	    }
	    for(let j = 0;j<6;j++){
	        let str = '#table-columns'+(i+6);
	        let inputId = 'input'+(i+6);
	        document.querySelector(str).innerHTML += `<input id="${inputId}" class="input form-control" type="text" value="">`;
	    }
	      //fillInputs(tableG,tableR,week);
	    }
	    mainContainer.innerHTML += `<hr style="border:1px dashed lightgrey" class="mt-5"/>`;
	 	//Генерируем поля для ввода/вывода чисел Красных и Зеленых недель
	 	genarateNumbersOfMonthes(data);
  	}


  	function fillInputs(tableG,tableR){
  		for(let i = 0;i<5;i++){
  			for(let j = 0;j<6;j++){
  				let id = '#table-columns'+(i+1)+' .input';
		        document.querySelectorAll(id)[j].value = tableG[i][j] === undefined ? '' : tableG[i][j]
		    }
	  		for(let j = 0;j<6;j++){
  				let id = '#table-columns'+(i+6)+' .input';
		        document.querySelectorAll(id)[j].value = tableR[i][j] === undefined ? '' : tableR[i][j]
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




	


  

  	//Функция для загрузки данных из json файла в зависимости от выбора направления подготовки
  	function selectDirection(e){
	  	
	  	if(e.target.id === 'addDirection'){
	  		isAddButton = true;
	  		isPressedChange = true;
	  		saveme.style.display = 'none';
	  		addDirections();
	  		
	  	}
	  	if(e.target.id === 'saveDirection'){
	  		saveDirections(e);
	  		showDirections(data,true);
	  	}
	  	if(e.target.id === 'addDirectionInputs'){
	      addDirectionInputs(GTable,RTable,data,e);
	    }
	    if(e.target.id === 'removeDirectionInputs'){
	      removeDirectionInputs();
	    }
	  	if(e.target.id === 'saveme'){
	      save(GTable,RTable,data,e);
	    }
	    	for(let i = 0;i<data.directionNames.length;i++){
	  		if(e.target.id === data.directionNames[i][1]){

	  			if(isAddButton){
	  				saveme.style.display = 'block';
			  		generateInputs();
			  		isAddButton = false;
			  	}
	  			GTable = data[data.directionNames[i][2]];
			    RTable = data[data.directionNames[i][3]];
			    fillInputs(GTable,RTable);
	  		}
	  	}
	   //  addDirection('data','ПИ-171(1)','PI-171-1');
  	}

  	//Функция для сохранения данных в json файл
  	function save(tableG,tableR,weeks,e){
        for(let i = 0;i<5;i++){
          for(let j = 0;j<=5;j++){
            let str = '#table-columns'+(i+1)+' .form-control';
             tableG[i][j] = document.querySelectorAll(str)[j].value;
          }
          for(let j = 0;j<=5;j++){
            let str = '#table-columns'+(i+6)+' .form-control';
             tableR[i][j] = document.querySelectorAll(str)[j].value;
          }  
        }

        for(let i = 0;i<12;i++){
        	let classWeek = '.weekInp'+i;
        	let classWeekR = '.weekInp'+(12+i);
        	let weekInput = document.querySelector(classWeek).value.split(',');
        	let weekInputR = document.querySelector(classWeekR).value.split(',');
        	for(let i = 0;i<weekInput.length;i++){
        		weekInput[i] = weekInput[i] !== '' ? Number(weekInput[i]) : '';
        	}
        	for(let i = 0;i<weekInputR.length;i++){
        		weekInputR[i] = weekInputR[i] !== '' ? Number(weekInputR[i]) : '';
        	}
        	weeks.greenWeek[i] = [];
        	weeks.redWeek[i] = [];
        	for(let j = 0;j<weekInput.length;j++){
	            weeks.greenWeek[i][j] = weekInput[j];
	        }
	        for(let j = 0;j<weekInputR.length;j++){
	            weeks.redWeek[i][j] = weekInputR[j];
	        }
        }

        //Ajax запрос на сервер для записи данных
        $.ajax({
        url: 'php/write.php',
        type: 'POST',
        dataType: 'json',
        data: {key: JSON.stringify(data,null,2),login: loginVal,pass:passVal},
        success: function (data) {
	        	//Табличка успешного сохранения данных в файл
	        	if(e.target.id === 'saveme'){
	        		message.style.opacity = 1;
		            message.style.display = 'block';
		            setTimeout(function(){
		              message.style.opacity = 0;
		            },500);
		            setTimeout(function(){
		              message.style.display = 'none';
		            },1500);
		        }
	            
        	} 
      	});
    }


    function checkFillDirections(firstInput,secondInput,thirdInput,fourInput){
    	if(firstInput === '' || firstInput === undefined || secondInput === '' || secondInput === undefined || thirdInput === '' || thirdInput === undefined || fourInput === '' || fourInput === undefined){
    		alert('Заполните все поля');
    		return false;
    	}
    	if((secondInput.match(/[A-Za-z0-9-]/gi) === null) || (secondInput.match(/[А-Я:'"()*&^%$;@#№!<>./|\=+_`~, ]/gi) !== null)){
    		alert('Уникальный идентификатор: может содержать только английский алфавит,цифры и знак "-"');
    		return false;
    	}
		for(let i = 0;i<data.directionNames.length;i++){
			if(data.directionNames[i][1] === secondInput){
    			alert('Введите уникальный идентификатор');
    			return false;
    		}
		}
    	if((thirdInput.match(/^[A-Za-z]/gi) === null) || (thirdInput.match(/[A-Za-z0-9]/gi) === null) || (thirdInput.match(/[А-Я:'"()*&^%$;@#№!<>./|\=+_`~, -]/gi) !== null) || thirdInput === 'greenWeek' || thirdInput === 'redWeek' || thirdInput === 'directionNames'){
    		alert('Название зеленой таблицы может содержать только английский алфавит и цифры, которые должны быть не в начале слова');
    		return false;
    	}
    	if((fourInput.match(/^[A-Za-z]/gi) === null) || (fourInput.match(/[A-Za-z0-9]/gi) === null) || (fourInput.match(/[А-Я:'"()*&^%$;@#№!<>./|\=+_`~, -]/gi) !== null) || fourInput === 'greenWeek' || fourInput === 'redWeek' || fourInput === 'directionNames'){
    		alert('Название красной таблицы может содержать только английский алфавит и цифры, которые должны быть не в начале слова');
    		return false;
    	}
    	console.log(thirdInput);
    	return 1;
    }


  	function saveDirections(e){
	  	let directColumns = document.querySelectorAll('.directColumns');
	  	let directInput = document.querySelectorAll('.directInput');
	  	let inputCheck = [];
	  	for(let i = 0;i<4;i++){
	  		inputCheck.push(directColumns[directColumns.length-1].children[i].children[1].value);
	  	}
	  	if(isPressedAddBtn){
	  		if(!checkFillDirections(inputCheck[0],inputCheck[1],inputCheck[2],inputCheck[3])){return;}
	  	}
	  	
	  	if(data.directionNames.length < directColumns.length){
			let arr = [];
			arr[0] = directColumns[directColumns.length-1].children[0].children[1].value;
			arr[1] = directColumns[directColumns.length-1].children[1].children[1].value;
			arr[2] = directColumns[directColumns.length-1].children[2].children[1].value;
			arr[3] = directColumns[directColumns.length-1].children[3].children[1].value;
			data.directionNames.push(arr);
			data[arr[2]] = [[],[],[],[],[],[],[]];
			data[arr[3]] = [[],[],[],[],[],[],[]];
		}else{
			for(let i = 0;i<directColumns.length;i++){
	  			data.directionNames[i][0] = directColumns[i].children[0].children[1].value;
	  			data.directionNames[i][1] = directColumns[i].children[1].children[1].value;
	  			if(data.directionNames[i][2] !== directColumns[i].children[2].children[1].value){//Переименовываем ключ объекта с сохранением содержимого ключа
	  				data[directColumns[i].children[2].children[1].value] = data[data.directionNames[i][2]];
	  				data[directColumns[i].children[3].children[1].value] = data[data.directionNames[i][3]];
	  				delete data[data.directionNames[i][2]];
	  			}
	  			data.directionNames[i][2] = directColumns[i].children[2].children[1].value;
	  			data.directionNames[i][3] = directColumns[i].children[3].children[1].value;
	  		}
		}
	  	isPressedAddBtn = false;
	  	$.ajax({
	        url: 'php/write.php',
	        type: 'POST',
	        dataType: 'json',
	        data: {key: JSON.stringify(data,null,2),login: loginVal,pass:passVal},
	        success: function (data) {
		        	//Табличка успешного сохранения данных в файл
		        	if(e.target.id === 'saveDirection'){
		        		message.style.opacity = 1;
			            message.style.display = 'block';
			            setTimeout(function(){
			              message.style.opacity = 0;
			            },500);
			            setTimeout(function(){
			              message.style.display = 'none';
			            },1500);
			        }
		            
	        	} 
	      	});
  	}


  	function addDirectionInputs(){
  		isPressedAddBtn = true;
	  	document.querySelector('#mainRow').innerHTML += `
		                                  <div class="directColumns col-md-12 col-lg-6 col-sm-12 mb-4" id="table-columns">
		                                    <div class="DIsDisplay"><p class="textForInputsDirections"><span class="badge badge-info">Название направления: </span></p><input class="directInput form-control" placeholder="Например: ИВТ-171(1)" type="text" value=""/></div>
		                                    <div class="DIsDisplay"><p class="textForInputsDirections"><span class="badge badge-info">Уникальный ID направления: </span></p><input class="directInput form-control" placeholder="Например: IVT-171-1" type="text" value=""/></div>
		                                    <div class="DIsDisplay"><p class="textForInputsDirections"><span class="badge badge-info">Название зеленой таблицы: </span></p><input class="directInput form-control" placeholder="Например: IVTRaspis1Red" type="text" value=""/></div>
		                                    <div class="DIsDisplay"><p class="textForInputsDirections"><span class="badge badge-info">Название красной таблицы: </span></p><input class="directInput form-control" placeholder="Например: IVTRaspis1Green" type="text" value=""/></div>
		                                  </div>`;
  	}


  	function removeDirectionInputs(){
  		if(!isPressedAddBtn){
  			let firstTable = data.directionNames[data.directionNames.length-1][2];//Берем название первой таблицы(зеленой) из directionNames
		  	let secondTable = data.directionNames[data.directionNames.length-1][3];//Берем название второй таблицы(красной) из directionNames
		  	delete data[firstTable];//Удаляем таблицы из data
		  	delete data[secondTable];//Удаляем таблицы из data
		  	data.directionNames.splice(data.directionNames.length-1,1);//Удаляем последний массив из directionNames
  		}
	  	let directColumns = document.querySelectorAll('.directColumns');
	  	directColumns[0].parentNode.removeChild(directColumns[directColumns.length-1]);//Удаляем последнюю форму из таба "Изменить"(при нажатии на "-")
  	}


    function addDirections(){
    	mainContainer.innerHTML = '';
    	mainContainer.innerHTML += `<div id="mainRow" class="row" ></div>`;
    	for(let i = 0;i<data.directionNames.length;i++){
	    document.querySelector('#mainRow').innerHTML += `
	                                  <div class="directColumns col-md-12 col-lg-6 col-sm-12 mb-4" id="table-columns${i+1}">
	                                    <div class="DIsDisplay"><p class="textForInputsDirections"><span class="badge badge-info">Название направления: </span></p><input class="directInput form-control" placeholder="Например: ИВТ-171(1)" type="text" value="${data.directionNames[i][0]}"/></div>
	                                    <div class="DIsDisplay"><p class="textForInputsDirections"><span class="badge badge-info">Уникальный ID направления: </span></p><input class="directInput form-control" placeholder="Например: IVT-171-1" type="text" value="${data.directionNames[i][1]}"/></div>
	                                    <div class="DIsDisplay"><p class="textForInputsDirections"><span class="badge badge-info">Название зеленой таблицы: </span></p><input class="directInput form-control" placeholder="Например: IVTRaspis1Red" type="text" value="${data.directionNames[i][2]}"/></div>
	                                    <div class="DIsDisplay"><p class="textForInputsDirections"><span class="badge badge-info">Название красной таблицы: </span></p><input class="directInput form-control" placeholder="Например: IVTRaspis1Green" type="text" value="${data.directionNames[i][3]}"/></div>
	                                  </div>`;
	    }
	    mainContainer.innerHTML += `<button class="btn btn-success mb-5" id="saveDirection" >Сохранить</button>
	    <button class="btn btn-success mb-5" id="addDirectionInputs" >+</button>
	    <button class="btn btn-success mb-5" id="removeDirectionInputs" >-</button>`;
    }
}