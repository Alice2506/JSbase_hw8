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

/*
Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
которая определяет максимальное значение среди этих чисел
*/

let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));
let thirdNumber = Number(prompt('Введите третье число'));

function getMaxNumber() {
    let maxNumber = firstNumber;
    if (secondNumber > maxNumber) {
        maxNumber = secondNumber;
    } else {
        if (thirdNumber > maxNumber) {
            maxNumber = thirdNumber;
        }
    }
    return maxNumber;
}

console.log('Максимальное число: ' + getMaxNumber());

/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

function sum(firstNum, secondNum) {
    let result = firstNum + secondNum;
    return result;
}

console.log(sum(5, 76));

function difference(firstNum, secondNum) {
    let result;
    if (firstNum >= secondNum) {
        result = firstNum - secondNum;
    } else {
        result = secondNum - firstNum;
    }
    return result;
}

console.log(difference(56, 100));