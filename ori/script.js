let absol = document.querySelector('#absol');
let alf = document.querySelector('#alf');
let bet = document.querySelector('#bet');
let gamm = document.querySelector('#gamm');

var x = 0, y = 0,
    vx = 0, vy = 0,
	ax = 0, ay = 0;


window.ondevicemotion = function(e) {
	console.log(1);
	alf.innerText = event.accelerationIncludingGravity.x;
	bet.innerText = event.accelerationIncludingGravity.y;
	gamm.innerText = event.accelerationIncludingGravity.z;
}