let randFilm = document.querySelector('.randFilm')[0],
	randomFilm = document.querySelector('#randomFilm'),
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
	img = document.querySelector('#img'),
	content = document.querySelector('.content')[0];


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
	
	// $('#img').on("load", function() {
	//     // weave your magic here.
	// });



	searchButton.onclick = function() {
		if(randomFilm.innerText !== 'Выбери случайный фильм'){
			chooseRandomFilm(randomFilm.innerText);
		}
		function chooseRandomFilm(url){
			window.open('https://yandex.ru/search/?text=' + url+ ' смотреть онлайн');
		}
	}


	//----------------------------------Кнопка Рандом-------------------------------------
	let isLoadPoster = false;
	randomButt.onclick = function(){
		let randIndex = parseInt(Math.random()*bdIMDB.responseJSON.length);
		let objMovie = bdIMDB.responseJSON[randIndex];
		$('#img,.content').css({'opacity': '0'});
		$('.randFilm').css({'border-radius':'8%'});
		// $('#randomButt').attr('disabled',true);


		setTimeout(function(){
			randomFilm.innerText = objMovie.Title;
			imdb.innerText = 'Рейтинг IMDB: '+objMovie.imdbRating;
			director.innerText = 'Режиссёр: '+objMovie.Director;
			year.innerText = 'Год: '+objMovie.Year;
			
			if(objMovie.Poster !== 'N/A'){
				img.src = objMovie.Poster;
			}else{
				img.src = 'no-poster.jpg';
				console.log('N/A, '+ isLoadPoster);
			}

			
		},500);


		setTimeout(function(){
			img.onerror = function(e){
				console.log('error');
				img.src = 'no-poster.jpg';
			}
				img.onload = function(e){
					console.log(e);
					$('#img,.content').css({'opacity': '1'});
					$('.randFilm').css({'border-radius':'8px'});
					// $('#randomButt').attr('disabled',false);
			}
		},800);

	}

});//End JQuery function ready()