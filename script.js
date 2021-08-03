'use strict';
// дз 3 день
let money = prompt('Ваш месячный доход?');
console.log(money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);
let expenses1 = prompt('Введите обязательную статью расходов?');
console.log(expenses1);
let amount1 = prompt('Во сколько это обойдется?');
console.log(amount1);
let expenses2 = prompt('Введите обязательную статью расходов?');
console.log(expenses2);
let amount2 = prompt('Во сколько это обойдется?');
console.log(amount2);
let mission = 500000;
let budgetMonth = money - amount1 - amount2;
console.log (budgetMonth);
console.log (Math.ceil(mission / budgetMonth));
let budgetDay  = money / 30;
if (budgetDay > 1200){
console.log ("У вас высокий уровень дохода");
} else if (budgetDay<=1200 && budgetDay>600){
console.log ("У вас средний уровень дохода");
} else if (budgetDay<=600 && budgetDay>0){
console.log ("К сожалению у вас уровень дохода ниже среднего");
} else {
    console.log ("Что то пошло не так");
    } ;