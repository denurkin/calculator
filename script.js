'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;

let start = function() {
    do {
        money = prompt('Ваш месячный доход?'); 
    } 
    while (!isNumber(money));
};

start();

let addExpenses = prompt('Перечислите возможные расходы' +
' за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
income = 'фриланс',
expenses1,
expenses2;


let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?');
        };

        do {
            sum = prompt('Во сколько это обойдется?');
        }
        while (!isNumber(sum));
    }
    console.log(sum);
    return sum
};
 
let exprensesAmount = getExpensesMonth();
let mission = 500000,
period = 8,
accumulatedMonth = getAccumulatedMonth(),
budgetDay =  Math.ceil(accumulatedMonth / 30);


// вывод в консоль
console.log(budgetDay);
console.log (addExpenses.toLowerCase().split(" "));

// функция которая показывает тип данных
let showTypeOf = function(data) {
console.log (data, typeof(data));
};

showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);
showTypeOf(income);
showTypeOf(mission);
showTypeOf(period);
showTypeOf(accumulatedMonth);
showTypeOf(budgetDay);



//условная конструкция показывающая уровень дохода
if (budgetDay > 1200) {
console.log ("У вас высокий уровень дохода");
} else if (budgetDay <= 1200 && budgetDay > 600) {
console.log ("У вас средний уровень дохода");
} else if (budgetDay <= 600 && budgetDay > 0) {
console.log ("К сожалению у вас уровень дохода ниже среднего");
} else {
    console.log ("Что то пошло не так");
    } ;
    

    //функция которая показывет остаток с месячного дохода
    function getAccumulatedMonth() {
        return money - exprensesAmount;
    } ;

    //функция которая показывает за сколько месяцев достигнем цели
    function getTargetMonth() {
       return Math.ceil(mission / accumulatedMonth);
    };

    console.log(getTargetMonth());

    if (getTargetMonth() >= 0) {
        console.log ('Цель будет достигнута');
    } else {
     console.log ('Цель не будет достигнута'); 
    };


