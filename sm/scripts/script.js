const searchForm = document.querySelector('#search-form'),
	  searchInput= document.querySelector('#search-input'),
	  movies = document.querySelector('#movies');

searchInput.oninput = (e) => {
	console.log(searchInput.value);
	if(searchInput.value === ""){
		getPopularMovies();
	}else{
		apiSearch;
	}
	
}
searchInput.onkeyup = (event) => {
	if(event.keyCode === 13 && searchInput.value === ''){
		getPopularMovies();
	}
	else if(event.keyCode === 13){
		apiSearch(event);
	}
	
}

getPopularMovies();
function getPopularMovies(){
	let serverUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ead41c3eaac089640f31601bd088ab4e&language=ru&page=1';
	apiRequest(serverUrl,'GET');
}

function apiSearch(event){
	event.preventDefault();
	
	let serverUrl = 'https://api.themoviedb.org/3/search/multi?api_key=ead41c3eaac089640f31601bd088ab4e&language=ru&query='+ searchInput.value;
	apiRequest(serverUrl,'GET');
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
		console.log(movies);
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
							        <h2 class="title" id="title">`+ (objMovies[i].title === undefined ? objMovies[i].name : objMovies[i].title) +`</h2>
							        <p class="rating"><span class="badge badge-info">Рейтинг: `+objMovies[i].vote_average+`</span></p>
							        <p class="year">Год: `+ ((objMovies[i].release_date !== undefined && objMovies[i].release_date !== "") ? objMovies[i].release_date.match(/^[0-9]+/gi) : 'неизвестен') +`</p>
							    	<div class="overview-block">
										<p id="overtext" class="overview">`+(objMovies[i].overview)+`</p>
							    	</div>
							    	<button id="youtube-btn" data-btn="`+i+`" class="btn btn-info" >Трейлер</button>
							    	<button id="search-btn" class="btn btn-success" data-year="${((objMovies[i].release_date !== undefined && objMovies[i].release_date !== "") ? objMovies[i].release_date.match(/^[0-9]+/gi) : '')}" data-title="${(objMovies[i].title === undefined ? objMovies[i].name : objMovies[i].title)}" ">Искать</button>
							    </div>
						    </div>`
	});
let isShowOverview = false;
	document.onclick = function(e) {

		if(e.target.id === 'youtube-btn'){
			let index = e.target.attributes[1].nodeValue;
			console.log(objMovies[index].media_type);
			getTrailer(objMovies[index].media_type,objMovies[index].id)
		}else if(e.target.className === 'youtube'){
			$("#youtube").removeClass('youtube');
			$("#youtube iframe").remove();
		}else if(e.target.id === 'overtext'){
			e.target.className = (isShowOverview && e.target.className == '') ? 'overview' : '';
			isShowOverview = !isShowOverview;
		}else if(e.target.id === 'search-btn'){
			console.log(e.target.attributes);
			let cleanYear = e.target.attributes[2].value;
			window.open('https://yandex.ru/search/?text='+e.target.attributes[3].value.toLowerCase()+' '+cleanYear + ' смотреть онлайн');
		
		}else if(e.target.id === 'search-input'){
			$(window).scrollTop(0);
		}
		
}
	
}




function getTrailer(type,id){
	if(type === undefined) type = 'movie';
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
		
		let response = JSON.parse(request.responseText);
		console.log(response.results);
		if(!response.results.length){
			alert("Трейлера нет");
			return;
		}
		let idTrailer = response.results[0].key ? 'notfound' : response.results[0].key;
		let iframe = `<iframe width="560" height="315" id="iiframe"  src="https://www.youtube.com/embed/${idTrailer}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
		$("#youtube").addClass('youtube');
		$("#youtube").html(iframe);
	});
	// alert('outer func')
	
}


var heightValue = 50;
let isEnd = true;
let isDown = false;

document.ontouchend = function(){
	if(isDown){
		$(".header").height(0);
	}else{
		$(".header").height(50);
	}
}

//Scrolling
$(document).ready(function() {
	var header = $(".header"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	var heightHeader = 50;
	
	$(window).scroll(function(e) {
		isTouched = true;
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		if ( scrolled > 0 ) {
			
			if($(window).scrollTop() >= 0 && $(window).scrollTop() <= 30){
				header.height(50);
			}else{
				if(scrolled > scrollPrev){
					if($(document).height() === ($(window).scrollTop() + $(window).height())){
						console.log($(document).height() +','+($(window).scrollTop() + $(window).height()));
						header.height(50);
						isDown = false;
					}else{
						isDown = true;
					}
					
				}else if(scrolled < scrollPrev){
					isDown = false;
				}
			}
			scrollPrev = scrolled;
		}	
	});			
});





// Animation 
let idInter;
setTimeout(function(){
	let isLight = true;
		idInter = setInterval(function(){
		if(window.matchMedia("(max-width: 700px)").matches){
			document.querySelector('#link').style.textShadow = 'none';
			clearInterval(idInter);
			return;
		}
		if(isLight === true){
			document.querySelector('#link').style.textShadow = '0 0 6px rgba(202, 228, 225, 0.92), 0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52), 0 0 21px rgba(0, 104, 216, 0.92), 0 0 34px rgba(30, 132, 242, 0.78), 0 0 54px rgba(30, 132, 242, 0.92)';
			isLight = false;
		}else if(isLight === false){
			document.querySelector('#link').style.textShadow = '0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58), 0 0 22px #876767, 0 0 38px rgba(0, 230, 209, 0.49), 0 0 60px #1e84f2';
			isLight = true;
		}
	},80);
	
},3000);



