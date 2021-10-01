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