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

/*
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст 
"Размер заработной платы за вычетом налогов равен значение"
*/

let userNumber = Number(prompt('Введите число'));

if (isNaN(userNumber)) {
    console.log('Введите данные в числовом формате');
}

function getSalary() {
    let salary = userNumber - userNumber * 0.13;
    return salary;
}

console.log(getSalary());