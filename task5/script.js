let num = 50;

if (num < 49) {
console.log('Неверно!')

} else if (num > 100) {
	console.log("Много!")
}else{
	console.log('Верно')
};

(num == 50) ? console.log('Верно!') : console.log('Неверно');

switch(num){
	case num < 49:
	console.log('неверно');
	break;
	case num > 80:
		console.log("Много!");
		break;
		case 50:
			console.log('Верно');
			break;
}