var secondSt = document.getElementById('second');

var hex = document.getElementById('hex');



var lol = 0;

var sec = 1;



var date = new Date();

var seconds = date.getSeconds();

sec = seconds;



setInterval(rotate,1000);

var i = 0;





function rotate(){

	var time = new Date();

	var s = time.getSeconds();

	var m = time.getMinutes();

	var h = time.getHours();

	s = s < 10 ? "0"+s : s;

	m = m < 10 ? "0"+m : m;

	h = h < 10 ? "0"+h : h;

	

	

	

	secondSt.innerHTML = h + ":" + m +":"+s;

	var em = Math.round(Math.random()*8);

	var col = ["green","red","white","cyan","black","yellow","#af00a9","#0066ff","#FF005A"]

	console.log(col[em]);

		secondSt.style.boxShadow = "0 0 100px "+ col[em]+"";

		

	


	document.getElementById('hex1').style.backgroundColor = "grey";
	document.body.style.backgroundColor = "#"+ h + m + s +"";
	
	secondSt.style.backgroundColor = "#"+ h + m + s +"";

	hex.innerHTML = "#"+ h + m + s +""

	

}