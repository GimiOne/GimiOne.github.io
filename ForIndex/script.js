window.onload = function(){
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
//////////////////////////////////////////////////////////////////////////////////////

var monthes = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

/////////////////////////////////////ДАННЫЕ.РАСПИСАНИЕ(END)/////////////////////////////////////////////////////////////////////////



/////////////Главные переменные///////////////

var date = new Date();
var month = date.getMonth();
var number = date.getDate();
var myday = date.getDay();

//////////////////////////////////////////////




//Объявление элементов DOM
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


//Нажать кнопку для того, чтобы посмотреть расписание недели на следующий день
document.getElementById('nextWeekButton').onclick = function(){
	if(!nextWeek){
		nextWeekButton.style.backgroundImage = 'url(left-arrow.svg)';
		nextWeekButton.style.backgroundSize = '10px';
		nextWeekButton.style.backgroundRepeat = 'no-repeat';
		nextWeek = true;
		WeekDay = getWeekDay(myday+1);
		tableOfTimetable();
	}else{
		nextWeekButton.style.backgroundImage = 'url(right-arrow.svg)';
		nextWeek = false;
		WeekDay = getWeekDay(myday);
		tableOfTimetable();
	}
		
	
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
var days = ['Воскресенье',
 'Понедельник', 'Вторник',
 'Среда', 'Четверг',
 'Пятница', 'Суббота'];
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
		    if(RedRaspis2Group[a][i-1] !== undefined){
				table[0].rows[i].children[1].innerText = RedRaspis2Group[a][i-1];
			}else{
				table[0].rows[i].children[1].innerText = '';
			}
		}
	}else if(textWeek.innerText === 'Зеленая' ){
		var a = dayOfIndex(WeekDay);
		for(var i = 1;i<7;i++){
		    if(GreenRaspis2Group[a][i-1] !== undefined){
				table[0].rows[i].children[1].innerText = GreenRaspis2Group[a][i-1];
			}else{
				table[0].rows[i].children[1].innerText = '';
			}
		}
	}
}



//Выдает индекс по  дню недели
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


}//скобка закрывает событие window.onload