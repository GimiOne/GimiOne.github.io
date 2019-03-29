let login = document.querySelector('#Login');
let password = document.querySelector('#Password');
let enter = document.querySelector('#Enter');

let log,pass;
enter.onclick = function(){
	log = login.value;
	pass = password.value;
	console.log('Login: ' + log+'\n'+'Password: ' + pass);
}



// console.log(outer());
// console.log(outer(0));
// console.log(outer());
// console.log(outer());