function slider(){
	var r = document.getElementById('rangeValue').value;
	var e = document.getElementById('in1').value;
	var g = document.getElementById('rangeValue2').value;
	var b = document.getElementById('rangeValue3').value;
	var elm = document.getElementById("para");
	document.getElementsByClassName('lol1')[0].value = r;
	document.getElementsByClassName('lol2')[0].value = g;
	document.getElementsByClassName('lol3')[0].value = b;
	
	
	
	elm.style.background = "rgb("+ r +","+ g +","+ b +")";
	

	
	
}

function slider2(){
	
	var r = document.getElementById('in1').value;
	 	if (r > 255){
			ale();
		}
	 	r = r > 255 ? 255:r;
	 	document.getElementById('in1').value = r;
	 
		var g = document.getElementById('in2').value;
		if (g > 255){
			ale();
		}
	 	g = g > 255 ? 255:g;
		var g = document.getElementById('in2').value = g;

		var b = document.getElementById('in3').value;
		if (b > 255){
			ale();
		}
 		b = b > 255 ? 255:b;
	var b = document.getElementById('in3').value = b;

	
	
	document.getElementById('rangeValue').value = r ;
	document.getElementById('rangeValue2').value = g;
	document.getElementById('rangeValue3').value = b;	
	var elm = document.getElementById("para");
	
	
	elm.style.background = "rgb("+ r +","+ g +","+ b +")"; 
	

	
	
}


function copy(){
	document.getElementById('copy').style.opacity = "0";
	
	var r = document.getElementById('in1').value;
	 	if (r > 255){
			ale();
		}
	 	r = r > 255 ? 255:r;
	 	document.getElementById('in1').value = r;
	 
		var g = document.getElementById('in2').value;
		if (g > 255){
			ale();
		}
	 	g = g > 255 ? 255:g;
		var g = document.getElementById('in2').value = g;

		var b = document.getElementById('in3').value;
		if (b > 255){
			ale();
		}
 		b = b > 255 ? 255:b;
	var b = document.getElementById('in3').value = b;

	document.getElementById('copy').innerHTML = r +","+ g +","+ b;
	
}







function slider4(){
	var a = document.getElementById('rangeValue4').value;
	var p = document.getElementsByTagName('p')[0];
	var m = document.getElementsByTagName('p')[1];
	
	 if(a < 150){
		p.style.color = "black";
		p.style.fontSize = a + "px";
		m.style.fontSize = a + "px";
	}else{
		p.style.color = "yellow";
		p.style.fontSize = a + "px";
		m.style.fontSize = a + "px";
	}
}


function test(e){ 
 code = (window.event) ? window.event.keyCode : e.which; 
 if(code === 13){ 
 	var r = document.getElementById('in1').value;
 	if (r > 255){
		ale();
	}
 	r = r > 255 ? 255:r;
 	document.getElementById('in1').value = r;
 
	var g = document.getElementById('in2').value;
	if (g > 255){
		ale();
	}
 	g = g > 255 ? 255:g;
	var g = document.getElementById('in2').value = g;

	var b = document.getElementById('in3').value;
	if (b > 255){
		ale();
	}
 	b = b > 255 ? 255:b;
	var b = document.getElementById('in3').value = b;


	
	document.getElementById('rangeValue').value = r ;
	document.getElementById('rangeValue2').value = g;
	document.getElementById('rangeValue3').value = b;	
	var elm = document.getElementById("para");
	
	
	elm.style.background = "rgb("+ r +","+ g +","+ b +")"; 
 } 
} 

// https://www.pornhub.com/view_video.php?viewkey=ph596387d1ebe3d

function ale(){
	alert("Значение не может быть больше 255!");
}