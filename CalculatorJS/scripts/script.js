let buttons = document.getElementsByClassName('buttons')[0];
let input = document.getElementById('mainInput');
let m = 0;
let isTrue = false;
buttons.ontouchstart = function(e){
    isTrue = true;
	let text = e.target.className !== 'buttons' ? e.target.innerText : ''; //выражение,чтобы не распространялось событие на родителя т.к при клике на родителя(class="buttons") в input попадет строка из всех цифр сконкатенированных вместе
	
	if(input.innerText[0] === '0'){
		input.innerText = '';
	}
	switch(text){
		case '=':
			input.innerText = input.innerText.replace('÷','/');
			input.innerText = eval(input.innerText);
			break;
		case 'C':
			input.innerText = '0';
			break;
		case 'M+':
			m = m + parseInt(input.innerText);
			break;
		case 'M-':
			m = m - parseInt(input.innerText);
			break;
		case 'MC':
			m = 0;
			break;
		case 'MR':
			input.innerText = m;
			break;
		default:
			input.innerText += text;
			break;
	}
	
	
}



buttons.onclick = function(e){
    if(isTrue === true){
        buttons.onclick = null;
    }
    console.log(e.type);
    if(e.type === 'click'){
        let text = e.target.className !== 'buttons' ? e.target.innerText : ''; //выражение,чтобы не распространялось событие на родителя т.к при клике на родителя(class="buttons") в input попадет строка из всех цифр сконкатенированных вместе
	
	if(input.innerText[0] === '0'){
		input.innerText = '';
	}
	switch(text){
		case '=':
			input.innerText = input.innerText.replace('÷','/');
			input.innerText = eval(input.innerText);
			break;
		case 'C':
			input.innerText = '0';
			break;
		case 'M+':
			m = m + parseInt(input.innerText);
			break;
		case 'M-':
			m = m - parseInt(input.innerText);
			break;
		case 'MC':
			m = 0;
			break;
		case 'MR':
			input.innerText = m;
			break;
		default:
			input.innerText += text;
			break;
	}

    }

	
}