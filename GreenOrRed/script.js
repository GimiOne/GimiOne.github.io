var arrowDown = document.getElementById('arrow-down');
var textCalls = document.getElementById('textCalls');
calls.style.transform = 'scaleY(0)';

window.onload = function(){
var calls = document.getElementById('calls');
/////////////////////////////////////ДАННЫЕ.РАСПИСАНИЕ/////////////////////////////////////////////////////////////////////////	


///////////////////////////////ТАБЛИЦА КРАСНЫХ И ЗЕЛЕНЫХ ЧИСЕЛ////////////////////////
																					//
var GreenWeek = [																	//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[3,4,5,6,7,8,9,17,18,19,20,21,22,23],											//
	[1,2,3,4,5,6,7,15,16,17,18,19,20,21,29,30,31],									//
	[1,2,3,4,12,13,14,15,16,17,18,26,27,28,29,30],									//
	[1,2,10,11,12,13,14,15,16,24,25,26,27,28,29,30]									//
];																					//
																					//
																					//										
var RedWeek = [																		//	
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[],																				//
	[10,11,12,13,14,15,16,24,25,26,27,28,29,30],									//
	[8,9,10,11,12,13,14,22,23,24,25,26,27,28],										//
	[5,6,7,8,9,10,11,19,20,21,22,23,24,25],											//
	[3,4,5,6,7,8,9,17,18,19,20,21,22,23,31]											//
];																					//
																					//
//////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////ТАБЛИЦА-РАСПИСАНИЕ/////////////////////////////////////
																					//
			//////////////////КРАСНОЕ РАСПИСАНИЕ//////////////////					//				
																					//
																					//
																					//
var RedRaspis1Group = [																//
['ПТЦА(304)', 'ПТЦА(304)'],															//
['ООП(308)','Компьютерные сети(224)'],												//
[,'Социальная психология(302)','ООП(211)'],											//
['Электроника(411Б)','Электроника(411Б)'],											//
['Копьютерные сети(211)','Культурология(315)','Культурология(304)',,'Физ-ра'],		//
[],																					//
[]																					//
];																					//
																					//
var RedRaspis2Group = [																//
['ПТЦА(304)', 'ПТЦА(304)', 'Копьютерные сети(224)'],								//
[,,'Компьютерные сети(224)','ООП(308)'],											//
[,'Социальная психология(302)','ООП(211)'],											//
['Электроника(411Б)','Электроника(411Б)'],											//
['Копьютерные сети(211)','Культурология(315)','Культурология(304)',,'Физ-ра'],		//
[],																					//
[]																					//
];																					//
																					//
var RedRaspis3Group = [																//
['ПТЦА(304)', 'ПТЦА(304)'],															//
['ООП(308)','Компьютерные сети(224)','БЖД(301)'],									//
[,'Социальная психология(302)','ООП(211)'],											//
['Электроника(411Б)','Электроника(411Б)'],											//
['Копьютерные сети(211)','Культурология(315)','Культурология(304)',,'Физ-ра'],		//
[],																					//
[]																					//
];																					//
																					//
var RedRaspis4Group = [																//
['ПТЦА(304)', 'ПТЦА(304)'],															//
['Компьютерные сети(224)','ООП(308)','БЖД(301)'],									//
[,'Социальная психология(302)','ООП(211)'],											//
['Электроника(411Б)','Электроника(411Б)'],											//
['Копьютерные сети(211)','Культурология(315)','Копьютерные сети(224)','Физ-ра'],	//
[],																					//
[]																					//
];																					//
																					//
																					//
		//////////////////////ЗЕЛЕНОЕ РАСПИСАНИЕ//////////////////////				//	
																					//
																					//
var GreenRaspis1Group = [															//
[,,'Социальная психология(302)','Компьютерные сети(224)'],							//
['ООП(308)','Компьютерные сети(224)','БЖД(301)'],									//
[,'БЖД(301)','ООП(211)'],															//
['Электроника(411Б)','Электроника(411Б)'],											//
['Копьютерные сети(211)','ПТЦА(309)','ПТЦА(309)',,'Физ-ра'],						//
[],																					//
[]																					//
];																					//
																					//
var GreenRaspis2Group = [															//
[,,'Социальная психология(302)'],													//
['Компьютерные сети(224)','ООП(308)','БЖД(301)'],									//
[,'БЖД(301)','ООП(211)'],															//
['Электроника(411Б)','Электроника(411Б)'],											//
['Копьютерные сети(211)','ПТЦА(309)','ПТЦА(309)',,'Физ-ра'],						//
[],																					//
[]																					//
];																					//
																					//
var GreenRaspis3Group = [															//
[,,'Социальная психология(302)'],													//
[,,'ООП(308)','Компьютерные сети(224)'],											//
[,'БЖД(301)','ООП(211)'],															//
['Электроника(411Б)','Электроника(411Б)'],											//
['Копьютерные сети(211)','ПТЦА(309)','ПТЦА(309)','Компьютерные сети(224)','Физ-ра'],//
[],																					//
[]																					//
];																					//
																					//
var GreenRaspis4Group = [															//
[,,'Социальная психология(302)'],													//
[,,'Компьютерные сети(224)','ООП(308)'],											//
[,'БЖД(301)','ООП(211)'],															//
['Электроника(411Б)','Электроника(411Б)'],											//
['Копьютерные сети(211)','ПТЦА(309)','ПТЦА(309)',,'Физ-ра'],						//
[],																					//
[]																					//
];																					//
																					//
																					//
//////////////////////////////////////////////////////////////////////////////////////

var monthes = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

/////////////////////////////////////ДАННЫЕ.РАСПИСАНИЕ(END)/////////////////////////////////////////////////////////////////////////
var RedRaspisGroups = RedRaspis2Group;
var GreenRaspisGroups = GreenRaspis2Group;




/////////////Главные переменные///////////////

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var number = date.getDate();
var myday = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();

//////////////////////////////////////////////




//Объявление элементов DOM
var option = document.getElementsByClassName('option');
var select = document.getElementById('select');
var textWeek = document.getElementById('greenOrRed');
var fullYear = document.getElementById('fullYear');
var WhatIsDay = document.getElementById('WhatIsDay');
var setColor = document.getElementById('setColor');


//Запись данных в элементы DOM
var WeekDay = getWeekDay(myday);
var nextWeek = false;
WhatIsDay.innerText = WeekDay;
fullYear.innerText = number+' '+ monthes[month]+' '+date.getFullYear();
GreenOrRed(month,number);//Вычисляет какого цвета неделя
tableOfTimetable();//Записывает расписание недели в таблицу



select.onchange = function(e){//Обрабатывает событие изменения в select'e в option
	localStorage.setItem('select', select.value);
	if(select.value === 'ivt1'){
		GreenRaspisGroups = GreenRaspis1Group;
		RedRaspisGroups = RedRaspis1Group;
		tableOfTimetable();
	}else if(select.value === 'ivt2'){
		GreenRaspisGroups = GreenRaspis2Group;
		RedRaspisGroups = RedRaspis2Group;
		tableOfTimetable();
	}else if(select.value === 'ivt3'){
		GreenRaspisGroups = GreenRaspis3Group;
		RedRaspisGroups = RedRaspis3Group;
		tableOfTimetable();
	}else if(select.value === 'ivt4'){
		GreenRaspisGroups = GreenRaspis4Group;
		RedRaspisGroups = RedRaspis4Group;
		tableOfTimetable();
	}
}


function OverLastDay(number){//Вычисляет число следующего дня
	if(number-lastDay(month,year) === 1){
		return 1;
	}
	else if(number-lastDay(month,year) === 2){
		return 2;
	}
	else if(number-lastDay(month,year) === 3){
		return 3;
	}
	else if(myday === 6 || myday === 5){
		return number;
	}else{
		return number;
	}
}


//Вычисляет последний день месяца
function lastDay(m, y) {
	m = m+1;
    return m===2 ? y & 3 || !(y%25) && y & 15 ? 28 : 29 : 30 + (m+(m>>3)&1);
}

//Вычисляет месяц при переходе последенего числа месяца на другой
function OverLastDayMonth(number){
	if(number-lastDay(month,year) >= 0){
		return month+1;
	}else{
		return month;
	}
}

//запоминает выбранный select после перезагрузки страницы
function ReminedReloadData(){
	var getSelect = localStorage.getItem('select');
	if(getSelect === 'ivt1'){
		select.selectedIndex = 0;
		GreenRaspisGroups = GreenRaspis1Group;
		RedRaspisGroups = RedRaspis1Group;
		tableOfTimetable();
	}else if(getSelect === 'ivt2'){
		select.selectedIndex = 1;
		GreenRaspisGroups = GreenRaspis2Group;
		RedRaspisGroups = RedRaspis2Group;
		tableOfTimetable();
	}else if(getSelect === 'ivt3'){
		select.selectedIndex = 2;
		GreenRaspisGroups = GreenRaspis3Group;
		RedRaspisGroups = RedRaspis3Group;
		tableOfTimetable();
	}else if(getSelect === 'ivt4'){
		select.selectedIndex = 3;
		GreenRaspisGroups = GreenRaspis4Group;
		RedRaspisGroups = RedRaspis4Group;
		tableOfTimetable();
	}
}
ReminedReloadData();


//Нажать кнопку для того, чтобы посмотреть расписание недели на следующий день
document.getElementById('nextWeekButton').onclick = function(){

	if(!nextWeek){
		nextWeekButton.style.backgroundImage = 'url(left-arrow.svg)';
		nextWeekButton.style.backgroundSize = '10px';
		nextWeekButton.style.backgroundRepeat = 'no-repeat';
		nextWeek = true;
		if(myday === 6){
			WeekDay = getWeekDay(1);
			WhatIsDay.innerText = WeekDay;
			fullYear.innerText = OverLastDay(number+2) +' '+ monthes[OverLastDayMonth(number)]+' '+date.getFullYear();
			GreenOrRed(OverLastDayMonth(number),OverLastDay(number+2));
		}else if(myday === 5){
			WeekDay = getWeekDay(1);
			WhatIsDay.innerText = WeekDay;
			fullYear.innerText = OverLastDay(number+3) +' '+ monthes[OverLastDayMonth(number)]+' '+date.getFullYear();
			GreenOrRed(OverLastDayMonth(number),OverLastDay(number+3));
		}else{
			WeekDay = getWeekDay(myday+1);
			WhatIsDay.innerText = WeekDay;
			fullYear.innerText = OverLastDay(number+1) +' '+ monthes[OverLastDayMonth(number)]+' '+date.getFullYear();
			GreenOrRed(OverLastDayMonth(number),OverLastDay(number+1));
			console.log(OverLastDayMonth(number)+','+OverLastDay(number+1));
		}
	}else{
		nextWeekButton.style.backgroundImage = 'url(right-arrow.svg)';
		nextWeek = false;
		WeekDay = getWeekDay(myday);
		GreenOrRed(month,number);
		fullYear.innerText = number +' '+ monthes[month]+' '+date.getFullYear();
		WhatIsDay.innerText = WeekDay;
	}	
	tableOfTimetable();
}


//Метод определяет: Красная или зеленая неделя?Записывает строку в тег H1 с id="GreenOrRed".Переменная textWeek это GreenOrRed
function GreenOrRed(month,number){//Принимает число месяца и число дня
	if(GreenWeek[month].indexOf(number) !== -1){
		textWeek.style.color = 'green';
		textWeek.innerText = 'Зеленая';
		setColor.style.backgroundColor = 'green';
	}
	else if(RedWeek[month].indexOf(number) !== -1){
		textWeek.style.color = 'red';
		textWeek.innerText = 'Красная';
		setColor.style.backgroundColor = 'red';
	}else{
		textWeek.style.fontSize = '14pt';
		textWeek.style.color = 'black';
		textWeek.innerText = 'Неизвестно какая неделя.Скорее всего, на этот год расписание недель не было сделано';
	}
}


//Возвращает день недели
function getWeekDay(myday) {
var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
var day = myday;
if(day === 7){
	return days[0];
}
return days[day];    	
}


//Заполняет таблицу значениями из массивов ТАБЛИЦА-РАСПИСАНИЕ(смотреть в самом верху)
function tableOfTimetable(){
var table = document.getElementsByTagName('table');
	if(textWeek.innerText === 'Красная' ){
		var a = dayOfIndex(WeekDay);
		for(var i = 1;i<7;i++){
		    if(RedRaspisGroups[a][i-1] !== undefined){
				table[0].rows[i].children[1].innerText = RedRaspisGroups[a][i-1];
			}else{
				table[0].rows[i].children[1].innerText = '';
			}
		}
	}else if(textWeek.innerText === 'Зеленая' ){
		var a = dayOfIndex(WeekDay);
		for(var i = 1;i<7;i++){
		    if(GreenRaspisGroups[a][i-1] !== undefined){
				table[0].rows[i].children[1].innerText = GreenRaspisGroups[a][i-1];
			}else{
				table[0].rows[i].children[1].innerText = '';
			}
		}
	}
}

//Берет день недели и выдает его индекс
function dayOfIndex(WeekDay){
	var a = 0;
	switch (WeekDay) {
	  case 'Понедельник':a = 0;break;
	  case 'Вторник':a = 1;break;
	  case 'Среда':a = 2;break;
	  case 'Четверг':a = 3;break;
	  case 'Пятница':a = 4;break;
	  case 'Суббота':a = 5;break;
	  case 'Воскресенье':a = 6;break;
	  default:alert( 'Ошибка' );
	}
	return a;
}


var isDownArrow = true;
arrowDown.onclick = function(){//кнопка сворачивания и разворачивания time-плашек расписания звонков
	if(isDownArrow){
		calls.style.transform = 'scaleY(1)';
		isDownArrow = false;
		var timePar = document.getElementsByClassName('timePar');
		var sixLine = document.getElementById('sixLine');
		var table = document.getElementById('table');
		textCalls.style.width = sixLine.offsetWidth+'px';
		for(var i =0;i<timePar.length;i++){
			timePar[i].style.width = sixLine.offsetWidth+'px';
		}
		calls.style.width = table.offsetWidth+'px';
		changeTime(hours,minutes);
		
	}else{
		calls.style.transform = 'scaleY(0)';
		isDownArrow = true;
		var timePar = document.getElementsByClassName('timePar');
		var sixLine = document.getElementById('sixLine');
		var table = document.getElementById('table');
		textCalls.style.width = sixLine.offsetWidth+'px';
		for(var i =0;i<timePar.length;i++){
			timePar[i].style.width = sixLine.offsetWidth+'px';
		}
		calls.style.width = table.offsetWidth+'px';
	}
}


//Придает цвет блоку  timePar, в времени которго находится
function changeTime(hours,minutes){
	var date = new Date();
	hours = date.getHours();
	minutes = date.getMinutes();
	if((hours === 8 && minutes >= 0 && minutes <= 59) || (hours === 9 && minutes >= 0 && minutes <= 30)){
		commonStyles(1,2,3,4,0);
	}else if((hours === 9 && minutes >= 50 && minutes <= 59) || (hours === 11 && minutes >= 0  && minutes <= 20) || (hours === 10 && minutes >= 0  && minutes <= 59)){
		commonStyles(0,2,3,4,1);
	}else if( (isDownArrow === false) && (hours === 11 && minutes >= 30 && minutes <= 59) || (hours === 13 && minutes === 0) || (hours === 12 && minutes >= 0  && minutes <= 59)){
		commonStyles(0,1,3,4,2);
	}else if((hours === 13 && minutes >= 20 && minutes <= 59) || (hours === 14 && minutes >= 0  && minutes <= 50)){
		commonStyles(0,1,2,4,3);
	}else if((hours === 15 && minutes >= 0 && minutes <= 59) || (hours === 16 && minutes >= 0  && minutes <= 30)){
		commonStyles(0,1,2,3,4);
	}else{
		for(var i = 0;i<timePar.length;i++){
			var timePar = document.getElementsByClassName('timePar');
			timePar[i].style.backgroundColor = 'transparent';
			timePar[i].style.color = 'black';
			timePar[i].style.backgroundColor = '#3c9bba';
			timePar[i].style.color = 'white';
		}
	}


	function commonStyles(a,b,c,d,e){//Общие стили плашек с временем
		var timePar = document.getElementsByClassName('timePar');
		timePar[a].style.backgroundColor = 'transparent';
		timePar[a].style.color = 'black';
		timePar[b].style.backgroundColor = 'transparent';
		timePar[b].style.color = 'black';
		timePar[c].style.backgroundColor = 'transparent';
		timePar[c].style.color = 'black';
		timePar[d].style.backgroundColor = 'transparent';
		timePar[d].style.color = 'black';
		timePar[e].style.backgroundColor = '#3c9bba';
		timePar[e].style.color = 'white';
	}
}


}//скобка закрывает событие window.onload


// var num = 3;
// var s = 1;
// while(num <= 30){
// 	if(s === 7){
// 		num = num + 7;
// 	}if(s > 7){
// 		s=1;
// 	}
	
	
// 	s++;
// 	num++;
// 	console.log(num);
// }