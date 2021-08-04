'use strict';
//Объявление переменных

let money = prompt('Ваш месячный доход?'),
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
income = 'фриланс',
expenses1 = prompt('Введите обязательную статью расходов?'),
amount1 = prompt('Во сколько это обойдется?'),
expenses2 = prompt('Введите обязательную статью расходов?'),
amount2 = prompt('Во сколько это обойдется?'),
mission = 500000,
period = 8,
accumulatedMonth = getAccumulatedMonth(),
budgetDay =  Math.ceil(accumulatedMonth / 30);

// вывод в консоль
console.log(budgetDay);
console.log (addExpenses.toLowerCase().split(" "));

// объявление функции и вывод типа данных
let showTypeOf = function(data) {
console.log (data, typeof(data));
};

showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);
showTypeOf(income);
showTypeOf(expenses1);
showTypeOf(amount1);
showTypeOf(expenses2);
showTypeOf(amount2);
showTypeOf(mission);
showTypeOf(period);
showTypeOf(accumulatedMonth);
showTypeOf(budgetDay);

// изменение типа данных на числа
amount1=Number(amount1);
amount2=Number(amount2);

//условная конструкция
if (budgetDay > 1200){
console.log ("У вас высокий уровень дохода");
} else if (budgetDay<=1200 && budgetDay>600){
console.log ("У вас средний уровень дохода");
} else if (budgetDay<=600 && budgetDay>0){
console.log ("К сожалению у вас уровень дохода ниже среднего");
} else {
    console.log ("Что то пошло не так");
    } ;
    
    //объявление функций и вывод их в консоль
    function getExpensesMonth(){
        return amount1 + amount2;
    } ;
    console.log(getExpensesMonth());


    function getAccumulatedMonth(){
        return money - amount1 - amount2;
    } ;


    function getTargetMonth(){
       return Math.ceil(mission / accumulatedMonth)
    };
    console.log(getTargetMonth());
