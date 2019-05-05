// $(document).ready(()=>{
	// let randomFilm = document.querySelector('#randomFilm');
	// let searchButton = document.querySelector('#search');
	// let randomButt = document.querySelector('#randomButt');
	// let blockRandFilm = document.querySelector('#blockRandFilm');
	// let left = document.querySelector('#left');
	// let right = document.querySelector('#right');
	// let main = document.querySelector('#main');
	// let rightvert = document.querySelector('#rightvert');
	// let leftvert = document.querySelector('#leftvert');
	// let leftside = document.querySelector('#leftside');
	// let rightside = document.querySelector('#rightside');


//document.getElementsByClassName('mw-category')[0].innerHTML.match(/title="[A-Za-z0-9А-Яа-я- .=:№#ё%!?,’)/(—…×@·]+/gi).join("','").replace(/title="/gi,"");



// let chooseRandomFilm = (url)=>{
// 	window.open('https://yandex.ru/search/?lr=146&text=' + url+ ' смотреть онлайн');
// }



// let films;
// let randomIndex;

// searchButton.onclick = function() {
// 	if(randomFilm.innerText !== 'Выбери случайный фильм'){
// 		chooseRandomFilm(randomFilm.innerText);
// 	}
// }





// let isTrue = true;
// randomButt.onclick = function(){
// 	if(isTrue){
// 		isTrue = false;
// 		let widthHalf = main.offsetWidth/2;
// 		rightvert.style.height = '50px';
// 		leftvert.style.height = '50px';
// 		left.style.left = widthHalf +'px';
// 		right.style.right = widthHalf +'px';
// 		setTimeout(scale,1005);


// 		function scale(){
// 			let randVal = parseInt(Math.random()*99999).toString();
// 			while(randVal.length < 5){
// 				randVal = '0' + randVal;
// 			}
// 			console.log(randVal.length);
// 			console.log(randVal);
// 			console.log(getMovies(randVal));
// 			let widthHalf = blockRandFilm.offsetWidth/4;
// 			left.style.left = -widthHalf +'px';
// 			right.style.right = -widthHalf +'px';
// 			setTimeout(function(){
// 				isTrue = true;
// 				rightvert.style.transform = 'translateY(0px)';
// 				leftvert.style.transform = 'translateY(0px)';
// 			},1000);
// 			setTimeout(function(){
// 				rightvert.style.transform = 'translateY(25px)';
// 				leftvert.style.transform = 'translateY(25px)';
// 				rightvert.style.height = '0px';
// 				leftvert.style.height = '0px';
// 			},800);
// 		}
// 	}
// }


	
	
// })


$(document).ready(()=>{


function getMovies(idIMDB){
	//console.log(idIMDB);
	$.ajax({
	    type: 'GET',
	    dataType: 'text',
	    /* sure you could easily steal this key, but I'll be keeping a close eye on it ;) */
	    url: 'http://www.omdbapi.com/?i='+ idIMDB +'&apikey=BanMePlz',
	    statusCode: {
	        401: function () {
	            console.log('Error: Daily request limit reached!')
	        }
	    },
	    success: function (response) {
	    	let datka = JSON.parse(response);
	    	//randomFilm.innerText = datka.Title;
	    	WriteToFile(datka);
	    },
	    complete: function () {
	        //console.log('complete');
	    }
	})    
}


function WriteToFile(datka){
	let JsonString =  JSON.stringify(datka);
	JsonString = ',\n'+JsonString;
	$.ajax({
      url: 'post.php',
      type: 'POST',
      dataType: 'json',
      data: {key: JsonString}
    });

    
}


$.ajax({
	    type: 'GET',
	    dataType: 'json',
	    /* sure you could easily steal this key, but I'll be keeping a close eye on it ;) */
	    url: 'query1.json',
	    statusCode: {
	        401: function () {
	            console.log('Error: Daily request limit reached!')
	        }
	    },
	    success: function (response) {
	    	let myResponse = response;
	    	query1IMDB(myResponse);
	    },
	    complete: function () {
	        //console.log('complete');
	    }
	}) 

let dataIMDB;
function query1IMDB(response){
	dataIMDB = response;
	for(let i = 534;i<540;i++){
		console.log(response[i].____IMDb);
		getMovies(response[i].____IMDb);
	}
}





document.onclick = function(){
	//console.log(dataIMDB);
	$.ajax({
	    type: 'GET',
	    dataType: 'json',
	    /* sure you could easily steal this key, but I'll be keeping a close eye on it ;) */
	    url: 'data.json',
	    statusCode: {
	        401: function () {
	            console.log('Error: Daily request limit reached!')
	        }
	    },
	    success: function (response) {
	    	let myResponse = response;
	    	console.log(myResponse);
	    },
	    complete: function () {
	        console.log('complete');
	    }
	}) 
}

});






/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////ANOTHER APP RANDOM WITH WIKIDATA//////////////////////





//  function makeSPARQLQuery( endpointUrl, sparqlQuery, doneCallback ) {
// 	var settings = {
// 		headers: { Accept: 'application/sparql-results+json' },
// 		data: { query: sparqlQuery }
// 	};
// 	return $.ajax( endpointUrl, settings ).then( doneCallback );
// }

// var endpointUrl = 'https://query.wikidata.org/sparql',
// 	sparqlQuery = "SELECT ?_____ ?____IMDb ?________ WHERE {\n" +
//         "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],ru\". }\n" +
//         "  ?_____ wdt:P31 wd:Q11424.\n" +
//         "  OPTIONAL { ?_____ wdt:P345 ?____IMDb. }\n" +
//         "  OPTIONAL { ?_____ wdt:P1476 ?________. }\n" +
//         "}";


// let bigData = [];
// makeSPARQLQuery( endpointUrl, sparqlQuery, function( data ) {
// 	// let regexp = /Q[0-9]+/gi;
// 	// for(let i = 0;i<data.results.bindings.length;i++){
// 	// 	let oleg = data.results.bindings[i].itemLabel.value;
// 	// 	if(oleg.search(/Q[0-9]+/i) === -1){
// 	// 		bigData.push(oleg);
// 	// 	}
// 	// }
// 		console.log(data.results.bindings[0].____IMDb.value);
// 		console.log(bigData);
// });


// randomButt.onclick = ()=>{
// 	if(bigData.length !== 0){
// 		let randValue = parseInt(Math.random()*bigData.length);
// 		let titleFilm = bigData[randValue];
// 		randomFilm.innerText = bigData[randValue];
// 		//console.log(bigData.results.bindings.length);
// 	}
// }



// let isTrue = true;
// let randValue = 0;
// randomButt.onclick = function(){
// 	if(isTrue){
// 		isTrue = false;
// 		let widthHalf = (main.offsetWidth/2)+2;
// 		rightvert.style.height = '50px';
// 		leftvert.style.height = '50px';
// 		left.style.left = widthHalf +'px';
// 		right.style.right = widthHalf +'px';
// 		randValue = parseInt(Math.random()*bigData.length);
// 		let titleFilm = bigData[randValue];
// 		setTimeout(scale,1005);


// 		function scale(){
// 			randomFilm.innerText = bigData[randValue];
// 			let widthHalf = blockRandFilm.offsetWidth/3;
// 			left.style.left = -widthHalf +'px';
// 			right.style.right = -widthHalf +'px';
// 			setTimeout(function(){
// 				isTrue = true;
// 				rightvert.style.transform = 'translateY(0px)';
// 				leftvert.style.transform = 'translateY(0px)';
// 			},1000);
// 			setTimeout(function(){
// 				rightvert.style.transform = 'translateY(25px)';
// 				leftvert.style.transform = 'translateY(25px)';
// 				rightvert.style.height = '0px';
// 				leftvert.style.height = '0px';
// 			},800);
// 		}
// 	}
// }






// let chooseRandomFilm = (url)=>{
// 	window.open('https://yandex.ru/search/?lr=146&text=' + url+ ' смотреть онлайн');
// }
// searchButton.onclick = function() {
// 	if(randomFilm.innerText !== 'Выбери случайный фильм'){
// 		chooseRandomFilm(randomFilm.innerText);
// 	}
// }