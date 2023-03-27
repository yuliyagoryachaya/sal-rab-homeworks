function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    let shippingSum

    if (productsSum == 0) {
        shippingSum = 0
    }
    if (productsSum >= freeShippingMinSum) {
        shippingSum = 0
    }
    if (productsSum >0 && < freeShippingMinSum) {
        shippingSum = shippingPrice
    }

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountSum
    if (productsSum >= discountMinSum){
        discountSum = (discountPart / 100 * productsSum)
        }else{
        discountSum = 0
        }
    }
    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum
    totalSum = productsSum
    totalSum = totalSum - discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    totalSum = totalSum + shippingSum
    let freeShipping
    freeShipping = shippingSum == 0

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
