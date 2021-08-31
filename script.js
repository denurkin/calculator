"use strict";
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let isString = function (n) {
    return String(parseFloat(n)) && isFinite(n);
};


let start = document.getElementById('start');
let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];
let checkbox = document.querySelector('#deposit-check');
let inputFields1 = document.querySelectorAll('.additional_income-item')[0];
let inputFields2 = document.querySelectorAll('.additional_income-item')[1];
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');

let budgetMonthValue = document.getElementsByClassName('result-total budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0];
let AdditionalIncomeValue = document.getElementsByClassName('result-total additional_income-value')[0];
let AdditionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('result-total income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('result-total target_month-value')[0];
console.log(expensesMonthValue)

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositCheck = document.querySelector('.deposit-check');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.title.period-amount');
console.log(periodAmount);




let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function () {
        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();

        
        
    },

    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        AdditionalExpensesValue.value = appData.addExpenses.join(', ');
        AdditionalIncomeValue.value = appData.addIncome.join(', ')
        targetMonthValue.value = Math.ceil(appData.getTargetMonth())
        incomePeriodValue.value = appData.calcPeriod();

        let changeNumber = function() {
            incomePeriodValue.value = appData.calcPeriod();
        };
        periodSelect.addEventListener('input', changeNumber);

        

    },
    addExpensesBlock: function() {
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length ===3) {
                expensesPlus.style.display = 'none';
            }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== "" && cashExpenses !== "" ){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length ===3) {
            incomePlus.style.display = 'none';
        }
    },
    getIncome: function() {
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== "" && cashIncome !== "") {
                appData.income[itemIncome] = cashIncome;
            }
        });
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== ""){
                appData.addExpenses.push(item);
            }
        })
    
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if (itemValue !== ""){
                    appData.addIncome.push(itemValue);
                }
        })
    },
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    //функция которая показывает расходы
    getExpensesMonth: function () {
        let res = 0;

        for (let key in this.expenses) {
            res += +this.expenses[key];
        }
        this.expensesMonth = res;
        return res;
    },
    getIncomeMonth: function () {
        let res = 0;

        for (let key in this.income) {
            res += +this.income[key];
        }
        this.incomeMonth = res;
        return res;
    },
    //функция которая показывает за сколько месяцев достигнем цели
    getTargetMonth: function () {
        return Math.ceil(targetAmount.value / this.budgetMonth);
    },
    //функция которая показывет бюджет на месяц и день
    getBudget: function () {
        this.budgetMonth = appData.budget + appData.incomeMonth - this.getExpensesMonth();
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
    calcPeriod: function(){
        return this.budgetMonth * periodSelect.value;
    }
};

let changeNumber = function(event) {
    periodAmount.textContent = event.target.value;
    };
periodSelect.addEventListener('input', changeNumber);




let disabledNumer = function() {
    if(salaryAmount.value === "") {
        start.disabled = true;
  } else {
      start.disabled = false;
  }
};
disabledNumer();

salaryAmount.addEventListener('input', disabledNumer)

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);


console.log("Наша программа включает в себя данные:\n");
for (let key in appData) {
    console.log(key , appData[key]);
};







