let absol = document.querySelector('#absol');
let alf = document.querySelector('#alf');
let bet = document.querySelector('#bet');
let gamm = document.querySelector('#gamm');
let bodys = document.querySelector('#bodys');
let circle = document.querySelector('#circle');

var x = 0, y = 0,
    vx = 0, vy = 0,
	ax = 0, ay = 0;


// window.ondevicemotion = function(e) {
// 	console.log(1);
// 	alf.innerText = event.accelerationIncludingGravity.x;
// 	bet.innerText = event.accelerationIncludingGravity.y;
// 	gamm.innerText = event.accelerationIncludingGravity.z;
// }


if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        var absolut1 = toDegree(event.absolut);
        var beta1 = Math.round(event.beta);
        var gamma1 = Math.round(event.gamma);
        var alpha1 = Math.round(event.alpha);
        

        handleOrientationEvent(absolut1,beta1, gamma1, alpha1);
    }, true);
}else{
	alert('Accelerator not supported');
}

var handleOrientationEvent = function(ab, x, y,z) {
    absol.innerText = ab;
    alf.innerText = 'X: '+ x;
	bet.innerText = 'Y: '+ y;
	gamm.innerText = 'Z: '+ z;
	circle.style.transform = 'translate('+y*2+'px,'+x*2+'px)';
	if(x === 0 && y === 0){
		circle.style.backgroundColor = 'lightgreen';
	}else{
		circle.style.backgroundColor = 'lightblue';
	}
	//bodys.style.backgroundColor = 'rgb('+toByte(x)+','+toByte(y)+','+toByte(z)+')';
};



function toDegree(radians) {
  return radians * 180 / Math.PI;
};


function toByte(a){
	let num = Math.abs(a);
	return Math.round(num);
}
console.log(toByte(10000));


window.onmousemove = function(e){
	circle.style.transform = 'translate('+e.pageX+'px,'+e.pageY+'px)';
}