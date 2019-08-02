var suggest_count = 0;
var input_initial_value = '';
var suggest_selected = 0;

$(window).ready(function(){
	//читаем ввод с клавиатуры
	$("#search-input").keyup(function(I){
		// определяем какие действия нужно делать при нажатии на клавиатуру
		switch(I.keyCode) {
			// игнорируем нажатия на эти клавишы
			case 13:  // enter
			case 27:  // escape
			case 38:  // стрелка вверх
			case 40:  // стрелка вниз
			break;

			default:
				// производим поиск только при вводе более 2х символов
				getMovies();
				function getMovies(){

					
				if($("#search-input").val().length>2){

					input_initial_value = 'lol';//$(this).val();
					// производим AJAX запрос к /ajax/ajax.php, передаем ему GET query, в который мы помещаем наш запрос
					$.get("https://api.themoviedb.org/3/search/multi?api_key=ead41c3eaac089640f31601bd088ab4e&language=ru&query='" + searchInput.val, { "query":$("#search-input").val() },function(data){
						//php скрипт возвращает нам строку, ее надо распарсить в массив.
						// возвращаемые данные: ['test','test 1','test 2','test 3']
						
						let list = JSON.parse(data).results;
						console.log(JSON.parse(data).results);
						suggest_count = list.length > 6 ? 7 : list.length;
						if(suggest_count > 0){
							// перед показом слоя подсказки, его обнуляем
							$("#search_advice_wrapper").html("").show();
							for(var i in list){
								if(i < 7){
									if(list[i].title !== '' && list[i].title !== undefined){
									// добавляем слою позиции
										$('#search_advice_wrapper').append('<div class="advice_variant">'+list[i].title+'</div>');
									}else if(list[i].name !== '' && list[i].name !== undefined){
										$('#search_advice_wrapper').append('<div class="advice_variant">'+list[i].name+'</div>');
									}
								}
								
							}
						}
					}, 'html');

				}
				}
			break;
		}
	});

	//считываем нажатие клавишь, уже после вывода подсказки
	$("#search-input").keydown(function(I){
		switch(I.keyCode) {
			// по нажатию клавишь прячем подсказку
			case 13: // enter
			case 27: // escape
				$('#search_advice_wrapper').hide();
				return false;
			break;
			// делаем переход по подсказке стрелочками клавиатуры
			case 38: // стрелка вверх
			case 40: // стрелка вниз
				I.preventDefault();
				if(suggest_count){
					//делаем выделение пунктов в слое, переход по стрелочкам
					key_activate( I.keyCode-39 );
				}
			break;
		}
	});


	//если кликаем в любом месте сайта, нужно спрятать подсказку
	$('html').click(function(e){
		if(e.target.className === 'advice_variant'){
			console.log(e.target.className);
			console.log($(e.target).text());
			$('#search-input').val($(e.target).text());
			apiSearch(event);
			
			$('#search_advice_wrapper').fadeOut(350).html('');
		}
		
		$('#search_advice_wrapper').hide();
	});
	// если кликаем на поле input и есть пункты подсказки, то показываем скрытый слой
	$('#search_input').click(function(event){
		//alert(suggest_count);
		if(suggest_count)
			$('#search_advice_wrapper').show();
		event.stopPropagation();
	});
});

function key_activate(n){
	$('#search_advice_wrapper div').eq(suggest_selected-1).removeClass('active');

	if(n == 1 && suggest_selected < suggest_count){
		suggest_selected++;
	}else if(n == -1 && suggest_selected > 0){
		suggest_selected--;
	}

	if( suggest_selected > 0){
		$('#search_advice_wrapper div').eq(suggest_selected-1).addClass('active');
		$("#search-input").val( $('#search_advice_wrapper div').eq(suggest_selected-1).text() );
	} else {
		$("#search-input").val( input_initial_value );
	}
}
