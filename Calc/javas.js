
function calculate(){
	var str = document.getElementById('lol').value;
	var write = document.getElementById('lol').value;
	try{
		if(str.includes("sqrt")){
			str = str.replace(/sqrt/g,"√")
		}
		if (str.includes("pow")){
			str = str.replace(/pow\((\w*)\,(\w*)\)/g,"$1<sup>$2 </sup>");			
		}
		if (str.includes("fact")){		
		str = str.replace(/fact\((\w+)\)/gi,"$1!");
		}
		document.getElementById('dvd').innerHTML = str;

		
		if(write.includes("=")){
			write = document.getElementById('lol').value;
			write = write.replace(/=/g,"");
			if(write.includes("sqrt")){
				write = write.replace(/sqrt/g,"Math.sqrt");
			}
			if(write.includes("pow")){
				write = write.replace(/pow/g,"Math.pow");
			}
			console.log(write);
			str +=  ((eval(write)));
			document.getElementById('dvd').innerHTML = str;
		}
	}catch(e){
	console.log("Ошибка!!!");
	}
}

function fact(num)
{
if (num === 0)
return 1;
else
return num * fact(num - 1);
}



var bool = true;
function scale(){
	if (bool === true){		
		document.getElementById('spec').style.transform = "scaleY(1)";
	
		bool = false;
	}else if (bool === false){
		document.getElementById('spec').style.transform = "scaleY(0)";
		bool = true;
	}
		document.getElementById('spec').style.transition = ".3s";
}










function redLine(){
	document.getElementById('dvd').style.width = "920px";
	document.getElementById('dvd').style.transition = ".3s";

}







