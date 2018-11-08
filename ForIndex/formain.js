var i = 1;
document.getElementById('audio').volume = "0";

function volume(){
	if(i===1){
		document.getElementById('audio').volume = "1";
		document.getElementById('butsound').value = "Sound";
		document.getElementById('butsound').style.border = "2px solid lightgrey";
		i = 0;
	}else if (i===0){
		document.getElementById('audio').volume = "0";
		document.getElementById('butsound').value = "Sound";
		document.getElementById('butsound').style.border = "2px solid red";
		i = 1;
	}
}


document.body.onload = function(){
	document.getElementsByClassName('preloader')[0].style.opacity = "0";
	document.getElementsByClassName('preloader')[0].style.visibility = "hidden";
	document.getElementsByClassName('hide')[0].style.visibility = "hidden";

	setTimeout(lol,500);

	function lol(){
		var prel =  document.getElementsByClassName('preloader1')[0];
		if (!prel.classList.contains('done')){
			prel.classList.add('done');
		}
	}
};
