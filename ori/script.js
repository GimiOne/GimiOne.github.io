let alf = document.querySelector('#alf');
let bet = document.querySelector('#bet');
let gamm = document.querySelector('#gamm');
let bodys = document.querySelector('#bodys');
let circle = document.querySelector('#circle');
let mainCircle = document.querySelector('#mainCircle');

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
        var beta1 = event.beta;
        var gamma1 = event.gamma;
        var alpha1 = event.alpha;
        

        handleOrientationEvent(beta1, gamma1, alpha1);
    }, true);
}else{
	alert('Accelerator not supported');
}

var handleOrientationEvent = function(x,y,z) {
    	alf.innerText = 'X: '+ Math.round(x);
	bet.innerText = 'Y: '+ Math.round(y);
	gamm.innerText = 'Z: '+ Math.round(z);
	circle.style.transform = 'translate('+y*2+'px,'+x*2+'px)';
	if(Math.round(x) === 0 && Math.round(y) === 0){
		circle.style.backgroundColor = 'lightgreen';
		mainCircle.style.border = '2px solid lightgreen';
	}else{
		circle.style.backgroundColor = 'lightblue';
		mainCircle.style.border = '2px solid lightblue';
	}
	bodys.style.backgroundColor = 'rgb('+toByte(x)+','+toByte(y)+','+toByte(z)+')';
};



function toDegree(radians) {
  return radians * 180 / Math.PI;
};


function toByte(a){
	let num = Math.abs(a);
	return Math.round(num);
}
console.log(toByte(10000));
