const searchForm = document.querySelector('#search-form'),
	  searchInput= document.querySelector('#search-input'),
	  movies = document.querySelector('#movies');


searchInput.oninput = apiSearch;

function apiSearch(event){
	event.preventDefault();
	let serverUrl = 'https://api.themoviedb.org/3/search/multi?api_key=ead41c3eaac089640f31601bd088ab4e&language=ru&query='+ searchInput.value;
	let objMovies = apiRequest(serverUrl,'GET');
}

document.onclick = function(e) {
	if(e.target.className === 'img'){
		let cleanYear = e.path[1].children[3].innerText.replace('Год: ','') === 'неизвестно' ? '' : e.path[1].children[3].innerText.replace('Год: ','');
		window.open('https://yandex.ru/search/?text='+e.path[1].children[1].innerText+' '+cleanYear + ' смотреть онлайн');
	}
}



function apiRequest(url,method){
	let request = new XMLHttpRequest();
	request.open(method,url);
	request.send();

	request.addEventListener('readystatechange',() =>{
		if(request.readyState !== 4) return;
		if(request.status !== 200){
			console.log('error: ' + request.status);
			return;
		}
		let movies = JSON.parse(request.responseText).results;
		
		addCardMovie(movies,20);

	});
}


function addCardMovie(objMovies,amount){
	if(objMovies === undefined) return;
	movies.innerHTML = "";
	console.log(objMovies);
	let beginPath;
	objMovies.forEach(function(item,i,arr){
		beginPath = 'https://image.tmdb.org/t/p/w300/';
		if(objMovies[i].poster_path === undefined || objMovies[i].poster_path === null){
			beginPath = '';
			objMovies[i].poster_path = 'no-poster.jpg';
		}
		
		movies.innerHTML += `<div  id="card">
						        <img class="img" width="300" src="`+beginPath + '' + objMovies[i].poster_path +`" alt="">
						        <h2 class="title">`+ (objMovies[i].title === undefined ? objMovies[i].name : objMovies[i].title) +`</h2>
						        <p class="rating">Рэйтинг: `+objMovies[i].vote_average+`</p>
						        <p class="year">Год: `+ ((objMovies[i].release_date !== undefined) ? objMovies[i].release_date.match(/^[0-9]+/gi) : 'неизвестно') +`</p>
						    </div>`
	});
	
}

