const searchForm = document.querySelector('#search-form'),
	  searchInput= document.querySelector('#search-input'),
	  movies = document.querySelector('#movies');


searchInput.oninput = function(e){
	WriteToFile(searchInput.value);
}

function WriteToFile(datak){
	let JsonString = datak;
	$.ajax({
      url: 'getMovies.php',
      type: 'GET',
      dataType: 'json',
      data: {key: JsonString},
      success: function (data) {
      		console.log(data);
      		jsonLoaded(data);
	        
	    } 
    });
}


function jsonLoaded(data){
	addCardMovie(data);
}


function addCardMovie(objMovies,amount){
	if(objMovies === undefined) return;
	movies.innerHTML = "";
	let beginPath;
	console.log(objMovies);
	objMovies.forEach(function(item,i,arr){
		movies.innerHTML += `<div  id="card">
						        <img class="img" width="300" src="`+(objMovies[i].Poster !== 'N/A' ? objMovies[i].Poster : 'no-poster.jpg') +`" alt="">
						        <div class="content">
							        <h2 class="title">`+ objMovies[i].Title +`</h2>
							        <p class="rating"><span class="badge badge-info">Рейтинг: `+objMovies[i].imdbRating+`</span></p>
							        <p class="year">Год: `+ ((objMovies[i].Year !== undefined || objMovies[i].Year !== "N/A") ? objMovies[i].Year : 'неизвестен') +`</p>
							    	<div class="overview-block">
										<p id="overtext" style="cursor: pointer" class="overview">`+(objMovies[i].Plot)+`</p>
							    	</div>
							    	<button id="search-btn" class="btn btn-info" ">Искать</button>
							    </div>
						    </div>`
	});
}


document.onclick = function(e) {
		if(e.target.id === 'overtext'){
			e.target.className = e.target.className  === 'overview' ? '' : 'overview';
		}else if(e.target.id === 'search-btn'){
			let cleanYear = e.path[1].children[2].innerText.replace('Год: ','') === 'неизвестен' ? '' : e.path[1].children[2].innerText.replace('Год: ','');
			window.open('https://yandex.ru/search/?text='+e.path[1].children[0].innerText.toLowerCase()+' '+cleanYear + ' смотреть онлайн');
		}else if(e.target.id === 'search-input'){
			$(window).scrollTop(0);
		}
		
}




var heightValue = 50;
let isEnd = false;
let isDown = true;
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


// function merge(leftArr, rightArr) {
// var sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0].Title <= rightArr[0].Title) {
//       sortedArr.push(leftArr[0]);
//       leftArr = leftArr.slice(1)
//    } else {
//       sortedArr.push(rightArr[0]);
//       rightArr = rightArr.slice(1)
//      }
//    }
//   while (leftArr.length)
//     sortedArr.push(leftArr.shift());
//   while (rightArr.length)
//     sortedArr.push(rightArr.shift());
//   return sortedArr;
// }


// function mergesort(arr) {
//   if (arr.length < 2) {
//     return arr; }
//   else {
//     var midpoint = parseInt(arr.length / 2);
//     var leftArr   = arr.slice(0, midpoint);
//     var rightArr  = arr.slice(midpoint, arr.length);
//     return merge(mergesort(leftArr), mergesort(rightArr));
//   }
// }



// $.ajax({
//       url: 'sortedMovies(1st)10000.json',
//       type: 'GET',
//       dataType: 'json',
//       success: function (data) {
//  		console.log(data[0].Title);
//  		let jsonchik = mergesort(data);
//  		console.log(jsonchik);
//  		console.log(BinarySearch('Hulk',jsonchik));
//  		// for(key in jsonchik){
//  		// 	WriteToFile(jsonchik[key]);
//  		// }
// 	  } 
//     });


// function BinarySearch(t,A){                                
//     var i = 0, j = A.length, k;                      
//     while (i < j)                
//     {  
//     	k = Math.floor((i+j)/2);
//        	if (t <= A[k].Title) j = k;
//        	else i = k+1;
//        	console.log(1);
//     }
//     if (A[i].Title === t) return i;     
//     else return -1;                 
// }




// function WriteToFile(datak){
// 	let JsonString = JSON.stringify(datak) + ',\n';
// 	$.ajax({
//       url: 'post.php',
//       type: 'POST',
//       dataType: 'json',
//       async: false,
//       data: {key: JsonString}
//     });
// }