let btn = document.getElementsByTagName('button');

btn[0].onclick = function(){
	alert('Вы нажали первую кнопку!');

};
btn[0].onclick = function () {
	alert('Вы нажали опять первую кнопку!');
};
