let absol = document.querySelector('#absol');
let alf = document.querySelector('#alf');
let bet = document.querySelector('#bet');
let gamm = document.querySelector('#gamm');

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
        var beta1 = toDegree(event.beta);
        var gamma1 = toDegree(event.gamma);
        var alpha1 = toDegree(event.alpha);
        

        handleOrientationEvent(absolut1,beta1, gamma1, alpha1);
    }, true);
}else{
	alert('Accelerator not supported');
}

var handleOrientationEvent = function(ab,x, y, z) {
    absol.innerText = ab;
    alf.innerText = 'X: '+Math.round(x);
	bet.innerText = 'Y: '+Math.round(y);
	gamm.innerText = 'Z: '+Math.round(z);
};


function toDegree(radians) {
  return radians * 180 / Math.PI;
};