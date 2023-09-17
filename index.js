/*
Задание 1
Создайте функцию которая возводит переданное число в куб, 
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

function getCube(number) {
    let result = Math.pow(number, 3);
    return result;
}

console.log(getCube(2));
console.log(getCube(3));
