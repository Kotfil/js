let startBtn = document.getElementById("start"),
		budgetValue = document.getElementsByClassName('budget-value')[0],
		dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
		levelValue = document.getElementsByClassName('level-value'),[0]
		expansesValue = document.getElementsByClassName('expanses-value')[0],
		optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
		incomeValue = document.getElementsByClassName('income-value')[0],
		monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
		yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

		expensesItem = document.getElementsByClassName('expenses-item'),
		expensesBtn = document.getElementsByTagName('button')[0],
		optionalExpensesBtn = document.getElementsByTagName('button')[1],
		countBtn = document.getElementsByTagName('button')[2],
		optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
		incomeItem = document.querySelector('.choose-income'),
		checkSavings = document.querySelector('#savings'),
		sumValue = document.querySelector('chose-sum'),
		percentValue = document.querySelector('.choose-sum'),
		percentValue = document.querySelector('.chose-percent'),
		yearValue = document.querySelector('.year-value'),
		monthValue = document.querySelector('.month-value'),
		dayValue = document.querySelector('.day-value');

		let money, time;

		function start(){
			money = +prompt("Ваш бюджет на месяц?", '');
			time = prompt('Введите дату в формате YYYY-MM-DD', '');

			while (isNaN(money) || money == '' || money == null){
				money = prompt("Ваш бюджет?", "");
			}
		} 

		let appData = {
			
		}
