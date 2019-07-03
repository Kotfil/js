menu = document.querySelector('.menu');

let pen = document.createElement('li'),
							text = document.createTextNode('Пятая часть');
pen.classList.add('menu-item');

menu.appendChild(pen);
pen.innerHTML = 'Пятый пункт';

console.log(pen);

pen.removeChild(adv[0]);

