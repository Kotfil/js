'use strict';
<<<<<<< HEAD
// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//      let num = 10;
// console.log(num);
//     }

// showFirstMessage("Hello World");
// console.log(num);



// var calc = function(a,b) {
//     return (a + b);
// }

let calc = (a,b) => a+b
console.log(calc(3,4));

console.log(calc(8,4));


function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum)


let str = "test";
console.log (str.length);


console.log(str.toUpperCase());
console.log(str.toLowerCase());


let twelve = "12.2px";

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));
=======

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


	for ( let i = 0; i < 2; i++)	{
	 let a = prompt("Введите обязательную статью расходов в этом месяце", '');
			b = prompt("Во сколько обойдется?", '');
		
			if ((typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null
							&& a !='' && b != '' && a.length < 50 ) {
								console.log("done");
								appData.expenses[a] = b;
							}else{
							
							}
						};

						appData.moneyPerDay = appData.budget / 30;



alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
	console.log("Средний уровень достатка");
}	else if 	(appData.moneyPerDay > 2000){
	console.log("Высокий уровеь достатка");
}	else	{
	console.log("Произошла ошибка")
>>>>>>> 492a5dbbc329d888756bf6b90df55f15da375f20
