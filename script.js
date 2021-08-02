'use strict';
let money = 100000;
console.log (typeof money);
const income = 'фриланс';
console.log (typeof income);
let addExpenses = 'Курсы Отпуск Проездной';
console.log (addExpenses.toLowerCase());
console.log (addExpenses.length);
console.log (addExpenses.toLowerCase().split(" "));
let deposit = true;
console.log (typeof deposit);
let mission = 500000;
let period = 8;
console.log ("Период равен " + period + " месяцев");
console.log ("Цель заработать " + mission + " рублей/долларов/гривен/юани");
let budgetDay  = money / 30;
console.log (budgetDay);
alert ("привет, мир");
console.log ('привет');
// дз 3 день
money = prompt('Ваш месячный доход?');
money;
console.log(money);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses;
console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке?');
deposit;
console.log(deposit);
let expenses1 = prompt('Введите обязательную статью расходов?');
expenses1;
console.log(expenses1);
let expenses2 = prompt('Введите обязательную статью расходов?');
expenses2;
console.log(expenses2);
let amount1 = prompt('Во сколько это обойдется?');
amount1;
console.log(amount1);
let amount2 = prompt('Во сколько это обойдется?');
amount2;
console.log(amount2);
let budgetMonth = money - amount1 - amount2;
console.log (budgetMonth);
console.log (Math.ceil(mission / budgetMonth));
if (budgetDay > 1200){
console.log ("У вас высокий уровень дохода");
} else if (budgetDay<=1200 && budgetDay>600){
console.log ("У вас средний уровень дохода");
} else if (budgetDay<=600 && budgetDay>0){
console.log ("К сожалению у вас уровень дохода ниже среднего");
} else {
    console.log ("Что то пошло не так");
    } ;