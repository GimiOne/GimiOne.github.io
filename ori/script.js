let absol = document.querySelector('absol');
let alf = document.querySelector('alf');
let bet = document.querySelector('bet');
let gamm = document.querySelector('gamm');

window.addEventListener("deviceorientation", handleOrientation, true);



function handleOrientation(event) {
  absol.innerText = event.absolute;
  alf.innerText = event.alpha;
  bet.innerText = event.beta;
  gamm.innerText = event.gamma;

  // Do stuff with the new orientation data
}