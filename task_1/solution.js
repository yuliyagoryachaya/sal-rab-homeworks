function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let massage; 
    message = productName;
    message = message + " ";
    message = message + "за";
    message = message + " ";
    massage = message + productPrice
    massage = message + " ";
    massage = message + "теперь в корзине!"
    console.log(massage);

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue;
    newValue = oldValue;
    newValue =  oldValue + 1;

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum;
    newSum = oldSum + difference;
    let newSumText;
    newSumText = newSum + " ₽"
    newSumText = `${newSum} ₽`;

    // Конец решения задания №1.3.

    return newSumText;
}

