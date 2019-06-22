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
	let beginPath;
	objMovies.forEach(function(item,i,arr){
		beginPath = 'https://image.tmdb.org/t/p/w300/';
		if(objMovies[i].poster_path === undefined || objMovies[i].poster_path === null){
			beginPath = '';
			objMovies[i].poster_path = 'no-poster.jpg';
		}
		
		movies.innerHTML += `<div  id="card">
						        <img class="img" width="300" src="`+beginPath + '' + objMovies[i].poster_path +`" alt="">
						        <div class="content">
							        <h2 class="title">`+ (objMovies[i].title === undefined ? objMovies[i].name : objMovies[i].title) +`</h2>
							        <p class="rating"><span class="badge badge-info">Рейтинг: `+objMovies[i].vote_average+`</span></p>
							        <p class="year">Год: `+ ((objMovies[i].release_date !== undefined && objMovies[i].release_date !== "") ? objMovies[i].release_date.match(/^[0-9]+/gi) : 'неизвестен') +`</p>
							    	<div class="overview-block">
										<p id="overtext" class="overview">`+(objMovies[i].overview)+`</p>
							    	</div>
							    	<button id="youtube-btn" data-btn="`+i+`" class="btn btn-info" >Трейлер</button>
							    	<button id="search-btn" class="btn btn-success" ">Искать</button>
							    </div>
						    </div>`
	});
let isShowOverview = false;
	document.onclick = function(e) {

		if(e.target.id === 'youtube-btn'){

			let index = e.target.attributes[1].nodeValue;
			getTrailer(objMovies[index].media_type,objMovies[index].id)
			
		}else if(e.target.className === 'youtube'){
			$("#youtube").removeClass('youtube');
			$("#youtube iframe").remove();
		}else if(e.target.id === 'overtext'){
			e.target.className = isShowOverview ? 'overview' : '';
			isShowOverview = !isShowOverview;
		}else if(e.target.id === 'search-btn'){
			let cleanYear = e.path[1].children[2].innerText.replace('Год: ','') === 'неизвестен' ? '' : e.path[1].children[2].innerText.replace('Год: ','');
			window.open('https://yandex.ru/search/?text='+e.path[1].children[0].innerText.toLowerCase()+' '+cleanYear + ' смотреть онлайн');
		}
}
	
}




function getTrailer(type,id){
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
		let idTrailer = JSON.parse(request.responseText).results[0].key === undefined ? 'notfound' : JSON.parse(request.responseText).results[0].key;
		let iframe = `<iframe width="560" height="315" id="iiframe"  src="https://www.youtube.com/embed/${idTrailer}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
		$("#youtube").addClass('youtube');
		$("#youtube").html(iframe);
	});
	
}


var heightValue = 0;
let isTouched = false;
document.ontouchend = function(){
	if(heightValue > 24){
		$(".header").height(50);
	}else{
		$(".header").height(0);
	}
	
	console.log(isTouched);
}

//Scrolling
$(document).ready(function() {
	var header = $(".header"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	var heightHeader = 50;
	
	$(window).scroll(function(e) {
		// if(isTouched === false){
		// 	console.log(1);
		// }
		isTouched = true;
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		if ( scrolled > 0 ) {
			if($(document).height() === ($(window).scrollTop() + $(window).height())){
				header.height(50);
			}
			if($(window).scrollTop() >= 0 && $(window).scrollTop() <= 30){
				header.height(50);
			}else{
				if(scrolled > scrollPrev && heightValue>=0){
					heightValue -= 1;
					header.height(heightValue);
					

				}else if(scrolled < scrollPrev && heightValue<=50){
					
						header.height(heightValue);
					heightValue += 1;
					
				}
			}
			scrollPrev = scrolled;
		}	
	});			
});