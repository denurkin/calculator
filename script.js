"use strict";
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let isString = function (n) {
    return String(parseFloat(n)) && isFinite(n);
};

let money;

let start = function () {
    do {
        money = prompt("Ваш месячный доход?", "50000");
    } while (!isNumber(money) || money.trim() === "");
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 100000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome
            let cashIncome;

            do {
                itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
           } while (
                isString(itemIncome)
           )


            do {
                 cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            } while (
                !isNumber(cashIncome)
            )
                

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt(
            "Перечислите возможные расходы за рассчитываемый период через запятую"
        );
        this.addExpenses = addExpenses.toLowerCase().split(",");
        
        for (let i = 0; i < this.addExpenses.length; i++) {
            const word = this.addExpenses[i];
            this.addExpenses[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
        console.log(this.addExpenses.join(', ')); 

        this.deposit = confirm("Есть ли у вас депозит в банке?");

        for (let i = 0; i < 2; i++) {
            let question;
         
            do {
                question = prompt("Введите обязательную статью расходов?");
           } while (
                isString(question)
           )

           let answer
           do {
            answer = prompt("Во сколько это обойдется?");
       } while (
            !isNumber(answer)
       )
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
    getInfoDeposit: function(){
        
            do {
                 this.percentDeposit = prompt('Какой годовой процент?', "10");
            } while (
                !isNumber(this.percentDeposit)
            )

            do {
                this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (
                !isNumber(this.moneyDeposit)
            )
    },
    calcSavedMoney: function(){
        return this.budgetMonth * this.period;
    }
};

appData.asking();
appData.getBudget();
appData.getInfoDeposit();

console.log (appData.getExpensesMonth());
console.log (appData.getTargetMonth());
console.log(money);

console.log("Наша программа включает в себя данные:\n");
for (let key in appData) {
    console.log(key , appData[key]);
};
