 let btn = document.getElementsByTagName('button'),
 			wrap = document.quertSelector('.wrapper'),
link = document.querySelector('a');
			 // btn[0].onclick = function(){
// 	alert('Вы нажали первую кнопку!');

// };
// btn[0].onclick = function () {
// 	alert('Вы нажали опять первую кнопку!');
// };
//btn[0].addEventListener('click', function(){
//	alert('Вы нажали первую кнопку');
//	
//});
//
//btn[0].addEventListener('click', function () {
//
//	alert('Вы нажали опять первую кнопку!');
//});
//
//btn[0].addEventListener('mouseenter', function(event) {
//	
//	console.log('Произошло событие: ' + event.type + ' на элементе' + event.target);
//});

wrap.addEventListener('click', function(){
	console.log('Произошло событие: ' + event.type + ' на элементе' + event.target);
});

link.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});
