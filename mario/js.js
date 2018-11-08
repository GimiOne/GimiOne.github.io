var path,a;
var elem;


function findImg(){

	
	
	

	path = document.getElementById('search');
	path = path.value;
	console.log(path);
	

	var articleDiv = document.querySelector("body");
	
	elem = document.createElement("img");
	console.log(typeof elem);
	elem.src = path;
	articleDiv.appendChild(elem);
	

	


}
var i = 0;
function spid(){
	
		i+=2000;
		var s = document.getElementById('spin').style.transform = "rotate("+ i+"deg)";

	var s = document.getElementById('spin').style.transition = "5s cubic-bezier(.39,.13,.18,.99)";

	console.log(s);

		
	
	
	
}









