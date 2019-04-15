let absol = document.querySelector('#absol');
let alf = document.querySelector('#alf');
let bet = document.querySelector('#bet');
let gamm = document.querySelector('#gamm');
let bodys = document.querySelector('#bodys');

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
        var beta1 = event.beta;
        var gamma1 = toDegree(event.gamma);
        var alpha1 = toDegree(event.alpha);
        

        handleOrientationEvent(absolut1,beta1, gamma1, alpha1);
    }, true);
}else{
	alert('Accelerator not supported');
}

var handleOrientationEvent = function(ab,x, y, z) {
    absol.innerText = ab;
    alf.innerText = 'X: '+ x;
	bet.innerText = 'Y: '+toByte(y);
	gamm.innerText = 'Z: '+toByte(z);
	bodys.style.backgroundColor = 'rgb('+toByte(x)+','+toByte(y)+','+toByte(z)+')';
};



function toDegree(radians) {
  return radians * 180 / Math.PI;
};


function toByte(a){
	let num = Math.abs(a);
	while(num > 255){
		num = num - (num/2);
	}
	return Math.round(num);
}
console.log(toByte(10000));
