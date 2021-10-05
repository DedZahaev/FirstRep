'use strict';
let title = "Учеба";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 21;
let rollback = 50;
let fullPrice = 100000;
let adaptive = true;

console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log(screenPrice + "$");
console.log(fullPrice + "₽");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));

title = prompt('Как называется ваш проект?');
console.log(title);
screens = prompt('Какие типы экранов нужно разрабатывать?');
console.log(screens);
screenPrice = +prompt('Сколько будет стоить данная работа?');
console.log(screenPrice);
adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - rollback / 100);
console.log(servicePercentPrice);

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
} else if (fullPrice == 0 || fullPrice || 15000 || fullPrice == 30000) {
    console.log("Даем скидку в 5%");
}