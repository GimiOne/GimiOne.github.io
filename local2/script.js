let randomFilm = document.querySelector('#randomFilm'),
	searchButton = document.querySelector('#search'),
	randomButt = document.querySelector('#randomButt'),
	blockRandFilm = document.querySelector('#blockRandFilm'),
	left = document.querySelector('#left'),
	right = document.querySelector('#right'),
	main = document.querySelector('#main'),
	rightvert = document.querySelector('#rightvert'),
	leftvert = document.querySelector('#leftvert'),
	leftside = document.querySelector('#leftside'),
	rightside = document.querySelector('#rightside'),
	imdb = document.querySelector('#imdb'),
	year = document.querySelector('#year'),
	director = document.querySelector('#director'),
	img = document.querySelector('#img');


//Загрузка базы данных(JSON файла) в переменную bdIMDB.
let bdIMDB = $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'IMDBFilms(1st at 10000).json',
    statusCode: {
        401: function () {
            console.log('Error: Daily request limit reached!')
        }
    },
    async: false,
    success: function (response) {
    	console.log('DataBase IMDB movies loaded!');
    	return response;
    }
});


//Загрузка id IMDB фильма(JSON файла) в переменную idIMDB.
let idIMDB = $.ajax({
    type: 'GET',
    dataType: 'json',
    /* sure you could easily steal this key, but I'll be keeping a close eye on it ;) */
    url: 'query1.json',
    async: false,
    statusCode: {
        401: function () {
            console.log('Error: Daily request limit reached!')
        }
    },
    success: function (response) {
    	console.log('DataBase idIMDB loaded!');
    	return response;
    }
});


$(document).ready(()=>{

	//---------------------------------Кнопка Искать-------------------------------------
	
	searchButton.onclick = function() {
		if(randomFilm.innerText !== 'Выбери случайный фильм'){
			chooseRandomFilm(randomFilm.innerText);
		}
		function chooseRandomFilm(url){
			window.open('https://yandex.ru/search/?text=' + url+ ' смотреть онлайн');
		}
	}


	//----------------------------------Кнопка Рандом-------------------------------------

	randomButt.onclick = function(){
		let randIndex = parseInt(Math.random()*bdIMDB.responseJSON.length);
		let objMovie = bdIMDB.responseJSON[randIndex];
		randomFilm.innerText = objMovie.Title;
		img.src = objMovie.Poster;
		imdb.innerText = 'Рейтинг IMDB: '+objMovie.imdbRating;
		director.innerText = 'Режиссёр: '+objMovie.Director;
		year.innerText = 'Год: '+objMovie.Year;
		console.log(objMovie);

	}

});//End JQuery function ready()