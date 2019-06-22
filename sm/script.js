const searchForm = document.querySelector('#search-form'),
	  searchInput= document.querySelector('#search-input'),
	  movies = document.querySelector('#movies');


searchInput.oninput = apiSearch;

function apiSearch(event){
	event.preventDefault();
	$(window).scrollTop(0);
	let serverUrl = 'https://api.themoviedb.org/3/search/multi?api_key=ead41c3eaac089640f31601bd088ab4e&language=ru&query='+ searchInput.value;
	let objMovies = apiRequest(serverUrl,'GET');
}

document.onclick = function(e) {
	console.log(e);
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
						        <p class="rating">Рейтинг: `+objMovies[i].vote_average+`</p>
						        <p class="year">Год: `+ ((objMovies[i].release_date !== undefined) ? objMovies[i].release_date.match(/^[0-9]+/gi) : 'неизвестно') +`</p>
						    	<button class="youtube-btn" data-btn="`+i+`">Трейлер</button>
						    </div>`
	});

	document.onclick = function(e) {
		if(e.target.className === 'youtube-btn'){
			let index = e.target.attributes[1].nodeValue;
			getTrailer(objMovies[index].media_type,objMovies[index].id)
			
		}else if(e.target.className === 'youtube'){
			$("#youtube").removeClass('youtube');
			$("#youtube iframe").remove();
		}else if(e.target.tagName){
		console.log(e.target.tagName);
	}
	console.log(e.target)
}
	
}




function getTrailer(type,id){
	console.log([type,id]);
	let trailerUrl = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=ead41c3eaac089640f31601bd088ab4e&language=ru`;
	let request = new XMLHttpRequest();
	request.open('GET',trailerUrl);
	request.send();

	request.addEventListener('readystatechange',() =>{
		if(request.readyState !== 4) return;
		if(request.status !== 200){
			console.log('error: ' + request.status);
			return;
		}
		let idTrailer = JSON.parse(request.responseText).results[0].key;
		
		let iframe = `<iframe id="iiframe"  src="https://www.youtube.com/embed/${idTrailer}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
		$("#youtube").addClass('youtube');
		$("#youtube").html(iframe);
		JSON.parse(request.responseText).results.forEach(function(i,item){
			console.log(`https://www.youtube.com/embed/${i.key}`);
		});
		let you = document.querySelector('#youtube'),
		    frame = document.querySelector('#iiframe'),
		    htm = document.querySelector('body');
		    window.orientation = 90;
		    //htm.style.transform = 'rotate(90deg)';
		    //frame.requestFullscreen();
		  

	});
	
}



//Scrolling
$(document).ready(function() {
	
	var header = $(".header"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	var heightHeader = 50;
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		console.log();
		if ( scrolled > 0 ) {
			console.log($(document).height() === ($(window).scrollTop() + $(window).height()));
			if($(document).height() === ($(window).scrollTop() + $(window).height())){
				header.height(50);
			}else{
				if(scrolled > scrollPrev ){
				//console.log(scrollPrev +','+ scrolled);
				//heightHeader -= 4;
	
					header.height(0);

				}else if(scrolled < scrollPrev ){
						header.height(50);
					
				}
			}
			
			scrollPrev = scrolled;
		}	
	});			
});