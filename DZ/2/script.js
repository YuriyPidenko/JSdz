// задание 2
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите втрое число');

if (num1 <= 1) {
    alert(num1 + ' Меньше или равна 1');
} else {
    alert(num1 + ' Больше 1');
}

if (num2 >= 3) {
    alert(num2 + ' Больше или равна 3');
} else {
    alert(num2 + ' Меньше 3')
}

// Задание 2
let test = true;
if (test === true) {
    console.log('+++');
} else {
    console.log('---');
}

alert((test === true) ? '++' : '--');

// задание 3

// let day = Math.ceil(Math.random() * 31 + 1);
let day = prompt('Введите дату:');
if (day >= 0 && day <= 10) {
    alert(`Число ${day} - Первая декада`);
} else if (day > 11 && day <= 20) {
    alert(`Число ${day} - Вторая декада`);
} else if (day > 21 && day <= 31) {
    alert(`Число ${day} - Третья декада`);
}


// Задание 4
let userNumber = prompt('Введите число');
let hundreds = (userNumber - userNumber % 100) / 100
let units = userNumber % 10;
let tens = (userNumber % 100 - units) / 10;

alert(`В числе ${userNumber}:
количество сотен: ${hundreds},
десятков: ${tens},
единиц: ${units}`);