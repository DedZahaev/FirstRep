'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разрабатывать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 50;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback / 100);
let allServicePrices;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getAllServicePrices = function () {
    allServicePrices = servicePrice1 + servicePrice2;
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



showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);



console.log(screens.split());
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screen.length);
console.log(servicePercentPrice);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");