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
    budget: +money,
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
                

            appData.income[itemIncome] = +cashIncome;
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
            this.expenses[question] = +answer;
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

let calculate = document.getElementById('start');
console.log(calculate);
let plus1 = document.getElementsByTagName('button')[0];
let plus2 = document.getElementsByTagName('button')[1];
console.log(plus1, plus2);
let checkbox = document.querySelector('#deposit-check');
console.log(checkbox);
let inputFields1 = document.querySelectorAll('.additional_income-item')[0];
let inputFields2 = document.querySelectorAll('.additional_income-item')[1];
console.log(inputFields1, inputFields2);

let resultBudgetMonth= document.getElementsByClassName('result-total budget_month-value');
let resultBudgetDay = document.getElementsByClassName('result-total budget_day-value');
let resultExpensesMonth= document.getElementsByClassName('result-total expenses_month-value');
let resultAdditionalIncome = document.getElementsByClassName('result-total additional_income-value');
let resultAdditionalExpenses = document.getElementsByClassName('result-total additional_expenses-value');
let resultIncomePeriod = document.getElementsByClassName('result-total income_period-value');
let resultTargetMonth = document.getElementsByClassName('result-total target_month-value');
console.log(resultBudgetMonth, resultBudgetDay, resultExpensesMonth, resultAdditionalIncome, resultAdditionalExpenses, resultIncomePeriod, resultTargetMonth);

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let additionalIncomeItem1 = document.querySelector('.additional_income-item')[0];
let additionalIncomeItem2 = document.querySelector('.additional_income-item')[1];
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositCheck = document.querySelector('.deposit-check');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');


console.log(salaryAmount, incomeTitle, incomeAmount, additionalIncomeItem1, additionalIncomeItem2, expensesTitle);
console.log(expensesAmount, additionalExpensesItem, depositCheck, depositAmount, depositPercent, targetAmount, periodSelect);





