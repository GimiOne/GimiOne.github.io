var mainText = document.getElementById('text').value;

function lol(text){
	document.getElementById('output').innerHTML = text;
}



function search(input){
	var length = 0;
	var text = document.getElementById('text').value;
	var match = "/" + input +"/g";
	try{
		length = text.match(eval(match)).length;
	}catch(e){
		length = 0;
	}

	if(input===""){
		length = 0;
	}
	

	document.getElementById('length').innerHTML = "Всего найдено совпадений: " + length;
	var outText = text.replace(eval(match),'<span style="background-color:cyan;">'+input+'</span>');

	document.getElementById('output').innerHTML = outText;
}





function clearHtml(){

	document.getElementById('input_search').value = "";
	search();
}








