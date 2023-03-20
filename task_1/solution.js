function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let massage; 
    let message = productName;
    let message = message + " ";
    let message = message + "за";
    let message = message + " ";
    let massage = message + "productPrice"
    let massage = message + " ";
    let massage = message + "теперь в корзине!"
    console.log (massage);

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue;
    let newValue = oldValue;
    let newValue =  oldValue + 1;

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum;
    let newSum = oldSum + difference;
    let newSumText;
    let newSumText = newSum + " ₽"
    let newSumText = "${newSum} ₽";

    // Конец решения задания №1.3.

    return newSumText;
}

