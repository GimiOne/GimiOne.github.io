var arrowDown = document.getElementById('arrow-down');
var textCalls = document.getElementById('textCalls');
var greenOrRed = document.getElementById('greenOrRed');
var table = document.getElementById('table');
var preloader = document.getElementById('preloader');
var circle = document.getElementById('circle');
calls.style.transform = 'scaleY(0)';
var dataJSON;
var isOnLoad = false; 


window.onload = function(){
    preloader.style.backgroundColor = 'transparent';
    circle.style.borderColor = 'transparent';
    circle.style.boxShadow = '1px 1px 1px transparent';
    setTimeout(function(){
	preloader.style.display = 'none';
    },1400);

    var calls = document.getElementById('calls');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                                //
var monthes = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];      //  
                                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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




var hideText = document.getElementsByClassName('hideText');
var colour = '';
var forThis = 0;
greenOrRed.onclick = function(){
   
    if(forThis === 0){
        var timePar = document.getElementsByClassName('timePar');
        document.getElementById('body').style.background = 'black';  
        document.getElementById('fullYear').style.color = 'white';
        document.getElementById('WhatIsDay').style.color = 'white';
        document.getElementById('select').style.fontWeight = '400';
         table.style.background = 'black';
         
         var tds = document.getElementsByTagName('td');
        for(var i = 0;i<tds.length;i++){
    		    tds[i].style.borderColor = 'rgba(255,255,255,0.3)';
    		    tds[i].style.boxShadow = '0 0 7px 1px rgba(95,95,95,0.1);';
    		     tds[i].style.background = 'black';
    		}
    	var trs = document.getElementsByTagName('tr');
        for(var i = 0;i<trs.length;i++){
    		    trs[i].style.borderColor = 'rgba(255,255,255,0.3)';
    		    trs[i].style.boxShadow = '0 0 7px 1px rgba(95,95,95,0.1);';
    		    trs[i].style.background = 'black';
    		}
    		
    		
        hideText = document.getElementsByClassName('hideText');
    		for(var i = 0;i<hideText.length;i++){
    		    hideText[i].style.fontFamily = '"Open Sans",sans-serif';
    		    hideText[i].style.fontWeight = '400';
    		    hideText[i].style.color = 'white';
    		    colour = 'white';
    		}
    	var timePar = document.getElementsByClassName('timePar');	
    		for(var i = 0;i<timePar.length;i++){
    		    timePar[i].style.fontFamily = '"Open Sans",sans-serif';
    		    timePar[i].style.fontWeight = '400';
    		    timePar[i].style.color = 'white';
    		}
    		for(var m = 0;m<6;m++){
    		    
    		    document.getElementsByClassName('numbers')[m].style.fontWeight = '400';
    		    document.getElementsByClassName('numbers')[m].style.color = 'white';
    		}
    		document.getElementById('FullA').style.color = 'white';
    		var nexxt = document.getElementById('nextWeekButton');
    		nexxt.style.backgroundImage = "url('img/right-arrowWhite.svg')";
    		nexxt.style.backgroundRepeat = "no-repeat";
    		nexxt.style.backgroundPosition = 'center';
    		nexxt.style.backgroundSize = '10px';
    		forThis = 1;
    }
    
    
    else if(forThis === 1){
        
        var timePar = document.getElementsByClassName('timePar');
        document.getElementById('body').style.background = 'white';  
        document.getElementById('fullYear').style.color = 'black';
        document.getElementById('WhatIsDay').style.color = 'black';
        document.getElementById('table').style.boxShadow = 'none';
        document.getElementById('table').style.borderColor = '#dadada';
        document.getElementById('textCalls').style.background = 'white';
        table.style.background = 'transparent';
        var tds = document.getElementsByTagName('td');
        
        for(var i = 0;i<tds.length;i++){
    		    tds[i].style.borderColor = '#dadada';
    		    tds[i].style.boxShadow = 'none';
    		    tds[i].style.background = 'transparent';
    		}
    	var trs = document.getElementsByTagName('tr');
        for(var i = 0;i<trs.length;i++){
    		    trs[i].style.borderColor = '#dadada';
    		    trs[i].style.boxShadow = 'none';
    		    trs[i].style.background = 'transparent';
    		}
    		
    		
         hideText = document.getElementsByClassName('hideText');
    		for(var i = 0;i<hideText.length;i++){
    		    hideText[i].style.fontFamily = '"Open Sans",sans-serif';
    		    hideText[i].style.fontWeight = '400';
    		    hideText[i].style.color = 'black';
    		    colour = 'black';
    		}
    	var timePar = document.getElementsByClassName('timePar');	
    		for(var i = 0;i<timePar.length;i++){
    		    timePar[i].style.fontFamily = '"Open Sans",sans-serif';
    		     timePar[i].style.fontWeight = '400';
    		    timePar[i].style.color = 'black';
    		}
    		for(var m = 0;m<6;m++){
    		    document.getElementsByClassName('numbers')[m].style.fontFamily = '"Open Sans",sans-serif';
    		    document.getElementsByClassName('numbers')[m].style.fontWeight = '400';
    		    document.getElementsByClassName('numbers')[m].style.color = 'black';
    		}
    		document.getElementById('select').style.fontFamily = '"Open Sans",sans-serif';
    			document.getElementById('select').style.fontWeight = '400';
    		if(greenOrRed.style.color === 'rgb(243, 0, 0)')
    		setColor.style.backgroundColor = 'rgb(243,0,0)';
    		else if(greenOrRed.style.color === 'green')
    		setColor.style.backgroundColor = 'green';
    		document.getElementById('FullA').style.borderColor = 'rgb(218,218,218)';
    		document.getElementById('FullA').style.color = 'black';
    		var nexxt = document.getElementById('nextWeekButton');
    		nexxt.style.backgroundImage = "url('img/right-arrow.svg')";
    		nexxt.style.backgroundRepeat = "no-repeat";
    		nexxt.style.backgroundPosition = 'center';
    		nexxt.style.backgroundSize = '10px';
    		
        forThis = 2;
    }

    else if(forThis === 2){
        var timePar = document.getElementsByClassName('timePar');
        if(window.innerWidth < 767) {
        document.getElementById('body').style.background = 'url(img/4.jpg)';
        document.getElementById('body').style.backgroundSize = '100% 100vh';
        } else {
        document.getElementById('body').style.background = 'url(img/2.jpg)';
        document.getElementById('body').style.backgroundSize = '100% 100vh';
        }
        document.getElementById('fullYear').style.color = 'black';
        document.getElementById('WhatIsDay').style.color = 'black';
        document.getElementById('table').style.boxShadow = '0 0 7px 1px rgba(0,0,0,0.2)';
        document.getElementById('table').style.borderColor = 'rgba(255,255,255,0.3)';
        document.getElementById('FullA').style.borderColor = 'rgba(255,255,255,0.3)';
        document.getElementById('select').style.color = 'white';
        document.getElementById('select').style.fontWeight = '300';
        setColor.style.backgroundColor = 'white';  
         table.style.background = 'transparent';
        document.getElementById('textCalls').style.background = 'transparent';
        
        var tds = document.getElementsByTagName('td');
        for(var i = 0;i<tds.length;i++){
    		    tds[i].style.borderColor = 'rgba(255,255,255,0.3)';
    		    tds[i].style.boxShadow = '0 0 7px 1px rgba(0,0,0,0.2)';
    		    tds[i].style.fontFamily = '"Open Sans",sans-serif';
    		    tds[i].style.fontWeight = '300';
    		    tds[i].style.background = 'transparent';
    		}
    	var trs = document.getElementsByTagName('tr');
        for(var i = 0;i<trs.length;i++){
    		    trs[i].style.borderColor = '2px solid rgba(255,255,255,0.3)';
    		    trs[i].style.fontFamily = '"Open Sans",sans-serif';
    		    trs[i].style.fontWeight = '300';
    		    trs[i].style.boxShadow = '0 0 7px 1px rgba(0,0,0,0.2)';
    		    trs[i].style.background = 'transparent';
    		}
        
        
        
        
         hideText = document.getElementsByClassName('hideText');
    		for(var i = 0;i<hideText.length;i++){
    		    hideText[i].style.fontFamily = '"Open Sans",sans-serif';
    		    hideText[i].style.fontWeight = '300';
    		    hideText[i].style.color = 'white';
    		    colour = 'black';
    		   
    		}
    	var timePar = document.getElementsByClassName('timePar');	
    		for(var i = 0;i<timePar.length;i++){
    		    timePar[i].style.fontFamily = '"Open Sans",sans-serif';
    		    timePar[i].style.fontWeight = '300';
    		    timePar[i].style.color = 'black';
    		}
    		for(var m = 0;m<6;m++){
    		    document.getElementsByClassName('numbers')[m].style.fontFamily = '"Open Sans",sans-serif';
    		    document.getElementsByClassName('numbers')[m].style.color = 'white';
    		}
    		document.getElementById('select').style.fontFamily = '"Open Sans",sans-serif';
    		var nexxt = document.getElementById('nextWeekButton');
    		nexxt.style.backgroundImage = "url('img/right-arrow.svg')";
    		nexxt.style.backgroundRepeat = "no-repeat";
    		nexxt.style.backgroundPosition = 'center';
    		nexxt.style.backgroundSize = '10px';
        forThis = 0;
    }
    
}



let table = document.getElementById('table');
let hide = document.getElementsByClassName('hideText');


table.onmouseover  = function(e){
    if(e.target.className === 'hideText' && e.target.innerText !== ''){
         e.target.style.color = 'white';
         e.target.style.backgroundColor = '#3c9bba';
         if(textWeek.innerText === 'Зеленая'){
             e.target.innerHTML = GreenRaspisGroups[dayOfIndex(WeekDay)][e.target.abbr].replace(/[A-Za-zА-Яа-я0-9().\ -]+\//gi,'');
         }else if(textWeek.innerText === 'Красная' ){
             e.target.innerHTML = RedRaspisGroups[dayOfIndex(WeekDay)][e.target.abbr].replace(/[A-Za-zА-Яа-я0-9().\ -]+\//gi,'');
         }
    }
}


table.onmouseout = function(e){
    if(e.target.className === 'hideText' && e.target.innerText !== '' && e.target.attr === undefined){
        e.target.style.color = 'white';
        e.target.style.backgroundColor = 'transparent';
        if(textWeek.innerText === 'Зеленая'){
            e.target.innerHTML = GreenRaspisGroups[dayOfIndex(WeekDay)][e.target.abbr].replace(/\/[A-Za-zА-Яа-я0-9().\ ]+/gim,'');
        }else if(textWeek.innerText === 'Красная' ){
             e.target.innerHTML = RedRaspisGroups[dayOfIndex(WeekDay)][e.target.abbr].replace(/\/[A-Za-zА-Яа-я0-9().\ ]+/gim,'');
        }      
        e.target.style.color = colour;
    }
}





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
		nextWeekButton.style.transform = 'rotate(180deg)';
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
		}
		
	}else{
		nextWeekButton.style.transform = 'rotate(0deg)';
		nextWeek = false;
		WeekDay = getWeekDay(myday);
		GreenOrRed(month,number);
		fullYear.innerText = number +' '+ monthes[month]+' '+date.getFullYear();
		WhatIsDay.innerText = WeekDay;
	}	
	tableOfTimetable();
	if(forThis === 2){
	    if(greenOrRed.style.color === 'rgb(243, 0, 0)')
    		setColor.style.backgroundColor = 'rgb(243,0,0)';
    		else if(greenOrRed.style.color === 'green')
    		setColor.style.backgroundColor = 'green';
	}
	
}


//Метод определяет: Красная или зеленая неделя?Записывает строку в тег H1 с id="GreenOrRed".Переменная textWeek это GreenOrRed
function GreenOrRed(month,number){//Принимает число месяца и число дня
	if(GreenWeek[month].indexOf(number) !== -1){
		textWeek.style.color = 'green';
		textWeek.innerText = 'Зеленая';
	}
	else if(RedWeek[month].indexOf(number) !== -1){
		textWeek.style.color = 'rgb(243,0,0)';
		textWeek.innerText = 'Красная';

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
				table[0].rows[i].children[1].innerText = RedRaspisGroups[a][i-1].replace(/\/[A-Za-zА-Яа-я0-9().\ ]+/gim,'');
			}else{
				table[0].rows[i].children[1].innerText = '';
			}
		}
	}else if(textWeek.innerText === 'Зеленая' ){
		var a = dayOfIndex(WeekDay);
		for(var i = 1;i<7;i++){
		    if(GreenRaspisGroups[a][i-1] !== undefined){
				table[0].rows[i].children[1].innerText = GreenRaspisGroups[a][i-1].replace(/\/[A-Za-zА-Яа-я0-9().\ ]+/gim,'');
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
arrowDown.onmousedown = function(){//кнопка сворачивания и разворачивания time-плашек расписания звонков
	if(isDownArrow){
		calls.style.transform = 'scaleY(1)';
		isDownArrow = false;
		var timePar = document.getElementsByClassName('timePar');
		var sixLine = document.getElementById('sixLine');
		var table = document.getElementById('table');
		var hideText = document.getElementsByClassName('hideText');
		for(var i = 0;i<hideText.length;i++){
		    hideText[i].style.color = 'transparent';
		    hideText[i].style.textShadow = 'none';
		}
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
		var hideText = document.getElementsByClassName('hideText');
		for(var i = 0;i<hideText.length;i++){
            if(forThis === 1){
                hideText[i].style.color = 'white';
            }
		    if(forThis === 0){
		        hideText[i].style.color = 'black';
		        
		    }else if(forThis === 2){
		        hideText[i].style.color = 'black';
		        
		    }
		    
		}
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
		for(var i = 0;i<5;i++){
			var timePar = document.getElementsByClassName('timePar');
			if(forThis !== 2){
			    timePar[i].style.backgroundColor = 'transparent';
			    timePar[i].style.color = 'black';
			}else if(forThis === 2){
			    timePar[i].style.backgroundColor = 'transparent';
			    timePar[i].style.color = 'black';
			}
			
			
		}
	}


	function commonStyles(a,b,c,d,e){//Общие стили плашек с временем
		var timePar = document.getElementsByClassName('timePar');
		if(forThis === 0){
		    timePar[a].style.backgroundColor = 'transparent';
    		timePar[a].style.color = 'black';
    		timePar[b].style.backgroundColor = 'transparent';
    		timePar[b].style.color = 'black';
    		timePar[c].style.backgroundColor = 'transparent';
    		timePar[c].style.color = 'black';
    		timePar[d].style.backgroundColor = 'transparent';
    		timePar[d].style.color = 'black';
    		timePar[e].style.background = 'rgba(0, 0, 0, 0) linear-gradient(45deg, rgb(38, 225, 236) 0%, rgb(19, 123, 255) 100%) repeat scroll 0% 0%';
    		timePar[e].style.color = 'white';
		}else if(forThis === 2){
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
        else if(forThis !== 2){
            timePar[a].style.backgroundColor = 'transparent';
            timePar[a].style.color = 'white';
            timePar[b].style.backgroundColor = 'transparent';
            timePar[b].style.color = 'white';
            timePar[c].style.backgroundColor = 'transparent';
            timePar[c].style.color = 'white';
            timePar[d].style.backgroundColor = 'transparent';
            timePar[d].style.color = 'white';
            timePar[e].style.backgroundColor = '#3c9bba';
            timePar[e].style.color = 'white';
        }
		
	}
}


}//скобка закрывает событие window.onload