menu = document.querySelector('.menu');

let pen = document.createElement('li'),
							text = document.createTextNode('Пятый пункт');
pen.classList.add('menu-item');

menu.appendChild(pen);
pen.innerHTML = 'Пятый пункт';

console.log(pen);

title.innerHTML = 'Мы продаем только подлинную технику Apple';
