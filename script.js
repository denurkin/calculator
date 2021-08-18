"use strict";
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function () {
    do {
        money = +prompt("Ваш месячный доход?","50000");
    } while (!isNumber(money));
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt(
            "Перечислите возможные расходы за рассчитываемый период через запятую"
        );
        this.addExpenses = addExpenses.toLowerCase().split(",");
        this.deposit = confirm("Есть ли у вас депозит в банке?");

        for (let i = 0; i < 2; i++) {
            let question = prompt("Введите обязательную статью расходов?");
            let answer = +prompt("Во сколько это обойдется?");
            this.expenses[question] = answer;
        }
    },

    //функция которая показывает расходы
    getExpensesMonth: function () {
        let res = 0;
        for (let key in this.expenses) {
            res += this.expenses[key];
        }
        return res;
    },

    //функция которая показывает за сколько месяцев достигнем цели
    getTargetMonth: function () {
        return Math.ceil(this.mission / this.budgetMonth);
    },
    //функция которая показывет бюджет на месяц и день
    getBudget: function () {
        this.budgetMonth = money - this.getExpensesMonth();
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    },
    //условная конструкция показывающая уровень дохода
    getStatusIncome: function () {
        if (this.budgetDay > 1200) {
            console.log("У вас высокий уровень дохода");
        } else if (this.budgetDay <= 1200 && this.budgetDay > 600) {
            console.log("У вас средний уровень дохода");
        } else if (this.budgetDay <= 600 && this.budgetDay > 0) {
            console.log("К сожалению у вас уровень дохода ниже среднего");
        } else {
            console.log("Что то пошло не так");
        }
    },
};

appData.asking();
appData.getBudget();

console.log (appData.getExpensesMonth());
console.log (appData.getTargetMonth());
console.log(money);

console.log("Наша программа включает в себя данные:\n");
for (let key in appData) {
    console.log(key , appData[key]);
};
