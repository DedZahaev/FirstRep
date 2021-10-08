'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 50;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const isNumber = function (num) {

    return !isNaN(parseFloat(num)) && isFinite(num);
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const asking = function () {
    title = prompt('Как называется ваш проект?', " Калькулятор верстки");
    screens = prompt('Какие типы экранов нужно разрабатывать?', "Простые , Сложные");
    screenPrice = prompt('Сколько будет стоить данная работа?');
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    }
    while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
}


const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");

        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }

        sum = prompt("Сколько это будет стоить?");
        while (!isNumber(sum)) {

            sum = prompt("Сколько это будет стоить?");
        }

    }
}

function getFullPrice() {
    fullPrice = screenPrice + allServicePrices;
    return fullPrice;

}

const getTitle = function (title) {
    title = title.trim();
    title = title.toLowerCase();
    title = title[0].toUpperCase() + title.slice(1);
    return title;
}

function getServicePercentPrices() {
    servicePercentPrice = Math.ceil(fullPrice - rollback / 100);
    return servicePercentPrice;
}

const getRollbackMessage = function (price) {

    if (price > 30000) {
        return "Даем скидку в 10%";
    } else if (price > 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%";
    } else if (price < 15000 && fullPrice > 0) {
        return "Скидка не предусмотрена";
    } else if (price < 0) {
        return "Что то пошло не так";
    } else if (price == 0 || price == 15000 || price == 30000) {
        return "Даем скидку в 5%";
    }
}
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle("fsdfs");

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(screens.split());
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screen.length);
console.log(servicePercentPrice);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");