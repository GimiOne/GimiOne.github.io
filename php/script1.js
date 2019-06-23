

let input = document.querySelector('#input');
input.oninput = function(e){
	console.log(input.value);
	WriteToFile(input.value);
}

function WriteToFile(datak){
	let JsonString = datak;
	$.ajax({
      url: 'getMovies.php',
      type: 'POST',
      dataType: 'json',
      data: {key: JsonString},
      success: function (data) {
	        console.log(data);
	    } 
    });
}



