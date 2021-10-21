'use strict';

let calculate = document.getElementsByTagName('h1');
console.dir(calculate[0]);

let btns = document.getElementsByClassName('handler_btn');
console.log(btns[0] + btns[1]);

let plus = document.querySelector('.screen-btn');


const other = document.querySelectorAll('.other-items');
const percent = console.log(other[0] + other[1]);
const numbers = console.log(other[2] + other[3] + other[4] + other[5] + other[6]);
console.log(other);

const range = document.querySelector('[type="range"]');
console.log(range);

const span = document.querySelector('span');
console.log(span);

const total = document.getElementsByClassName('total-input');
for (let i = 0; i < total.length; i++) {
    console.log(total[i]);
}

let scr = document.querySelectorAll('.screen');

scr.forEach(function (item) {
    console.log(item);
})




// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 10,
//     fullPrice: 0,
//     servicePercentPrice: 1,
//     allServicePrices: 0,
//     services: {},
//     start: function () {
//         appData.asking();
//         appData.addPrices();
//         appData.getFullPrice();
//         appData.getServicePercentPrices();
//         appData.getTitle();
//         appData.logger();
//     },

//     isNumber: function (num) {
//         return !isNaN(parseFloat(num)) && isFinite(num);
//     },
//     isStroke: function (stroke) {
//         return isNaN(parseFloat(stroke));
//     },
//     asking: function () {

//         do {
//             appData.title = prompt('Как называется ваш проект?', " Купил ВАЗ 2108");
//         }
//         while (!appData.isStroke(appData.title));
//         for (let i = 0; i < 2; i++) {
//             let name;
//             do {
//                 name = prompt("Какие типы экранов нужно разрабатывать?");
//             }
//             while (!appData.isStroke(name));

//             let price = 0;
//             do {
//                 price = prompt('Сколько будет стоить данная работа?');
//             }
//             while (!appData.isNumber(price));

//             appData.screens.push({
//                 id: i,
//                 name: name,
//                 price: price
//             });

//         }

//         for (let i = 0; i < 2; i++) {
//             let name;
//             do {
//                 name = prompt("Какой дополнительный тип услуги нужен?");
//             }
//             while (!appData.isStroke(name));

//             let price = 0;

//             do {
//                 price = prompt("Сколько это будет стоить?");
//             }
//             while (!appData.isNumber(price));

//             appData.services[name] = +price;




//         }

//         appData.adaptive = confirm('Нужен ли адаптив на сайте?');
//     },
//     addPrices: function () {
//         for (let screen of appData.screens) {
//             appData.screenPrice += +screen.price;
//         }

//         for (let key in appData.services) {
//             appData.allServicePrices += appData.services[key];
//         }
//     },

//     getFullPrice: function () {
//         appData.fullPrice = +appData.screenPrice + appData.allServicePrices;


//     },
//     getServicePercentPrices: function () {
//         appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
//     },
//     getTitle: function () {
//         appData.title = appData.title.trim();
//         appData.title = appData.title.toLowerCase();
//         appData.title = appData.title[0].toUpperCase() + appData.title.slice(1);

//     },
//     getRollbackMessage: function (price) {

//         if (price > 30000) {
//             return "Даем скидку в 10%";
//         } else if (price > 15000 && price < 30000) {
//             return "Даем скидку в 5%";
//         } else if (price < 15000 && price > 0) {
//             return "Скидка не предусмотрена";
//         } else if (price < 0) {
//             return "Что то пошло не так";
//         } else if (price == 0 || price == 15000 || price == 30000) {
//             return "Даем скидку в 5%";
//         }
//     },

//     logger: function () {
//         // console.log(appData.fullPrice);
//         // console.log(appData.servicePercentPrice);
//         // console.log(appData.screens);
//         // console.log(appData.services);
//         // for (let key in appData) {
//         //     console.log("Ключ: " + key + " " + "Значение " + appData[key]);
//         // }
//     }



// };

// appData.start();
// // appData.asking();
// // appData.allServicePrices = appData.getAllServicePrices();
// // appData.fullPrice = appData.getFullPrice();
// // appData.servicePercentPrice = appData.getServicePercentPrices();
// // appData.title = appData.getTitle("fsdfs");