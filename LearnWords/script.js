//Истории
let stories = {
	storyAboutFriends: 'Ни-ки-та и Лё-ша – друзь-я. О-ни вмес-те хо-дят в дет-ски-й сад. У Лё-ши есть са-мо-кат. А у Ни-ки-ты – ружь-е. Не на-сто-я-ще-е, а иг-ру-шеч-но-е. Э-ти маль-чи-ки – мо-лод-цы. О-ни всег-да де-лят-ся и-груш-ка-ми. И ни-ко-гда не ссо-рят-ся. Вдво-ём иг-ра-ют и сме-ют-ся. Хо-ро-шо дру-жи-ть!',
	inForest: 'Ле-том в ле-су хо-ро-шо. Све-тит солн-це, по-ют птич-ки, ра-ду-ют-ся все зве-ри. Вот ры-жа-я бел-ка. О-на гры-зет о-реш-ки. Вот о-лень, он щип-лет трав-ку и пьет во-ду из ручь-я. А э-то - за-й-ка. Он пря-чет-ся под кус-том. Фи-лин спит, а ли-си-ца близ-ко. Где же миш-ка ко-со-ла-пы-й? Он объ-ел-ся мё-ду и от-ды-ха-ет',
	goldEgge: 'Жи-ли се-бе дед да ба-ба и бы-ла у них ку-роч-ка ря-ба. Снес-ла ку-роч-ка я-ич-ко: я-ич-ко не прос-то-е а зо-ло-то-е. Дед бил — бил — не раз-бил. Ба-ба би-ла, би-ла — не раз-би-ла. Мыш-ка бе-жа-ла, хвос-ти-ком мах-ну-ла, я-ич-ко у-па-ло и раз-би-лось. Дед и ба-ба пла-чут, ку-роч-ка ку-дах-чет: «Не плачь, дед, не плачь, ба-ба! Я сне-су вам я-ич-ко дру-го-е, Не зо-ло-то-е а прос-то-е!',
	lionAndMouse: 'Лев спал. Мышь про-бе-жа-ла е-му по те-лу. Он про-снул-ся и по-й-мал е-ё. Мышь ста-ла про-сить что-бы он пус-тил е-ё. О-на ска-за-ла: «Ес-ли ты ме-ня пус-тишь, и я те-бе до-бро сде-ла-ю.» Лев за-сме-ял-ся, что мышь обе-ща-ет е-му доб-ро сде-лать и пус-тил е-ё. По-том о-хот-ни-ки по-й-ма-ли льва и при-вя-за-ли ве-рёв-ко-й к де-ре-ву. Мышь у-слы-ха-ла льви-ны-й рёв, при-бе-жа-ла, пе-ре-грыз-ла ве-рёв-ку и ска-за-ла: »Пом-нишь, ты сме-ял-ся, не ду-мал, что-бы я мог-ла те-бе доб-ро сде-лать, а те-перь ви-дишь, бы-ва-ет и от мы-ши до-бро».',
	antAndPigeon: 'Му-ра-ве-й спус-тил-ся к ру-чью: за-хо-тел на-пить-ся. Вол-на за-хлест-ну-ла  е-го и чуть не по-то-пи-ла. Го-луб-ка нес-ла вет-ку; о-на у-ви-де-ла  -  му-ра-ве-й то-нет, и бро-си-ла е-му вет-ку в ру-че-й. Му-ра-ве-й сел на вет-ку и спас-ся. По-том о-хот-ник рас-ста-вил сеть на го-луб-ку и хо-тел за-хлоп-нуть. Му-ра-ве-й под-полз к о-хот-ни-ку и у-ку-сил е-го за но-гу; о-хот-ник ох-нул и у-ро-нил сеть. Го-луб-ка вспорх-ну-ла и у-ле-те-ла.'
};
//Конец.Истории


document.body.style.background = 'linear-gradient(45deg,#18d1d7,#057bce)';
let word = document.querySelector('#word');
let bg = document.querySelector('#bg');
let arrayStories = [];
for(text in stories){
	arrayStories.push(stories[text].split(' '));
}
console.log(arrayStories);


let words = arrayStories[parseInt(Math.random()*arrayStories.length)];
word.innerHTML = words[0];


let index = 0;
document.ondblclick = (e)=>{
	if(e.clientX>(window.innerWidth/2)){
		if(index >= words.length-1){
			bg.style.color = '#ff5959';
			setTimeout(()=>{
				bg.style.color = 'white';
			},200);
			
		}else{
			index++;
			word.innerHTML = words[index];
		}
	}else{
		if(index <= 0){
			bg.style.color = '#ff5959';
			setTimeout(()=>{
				bg.style.color = 'white';
			},200);
		}else{
			index--;
			word.innerHTML = words[index];
		}
		
	}
}
