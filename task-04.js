/* Task-04 */
function findAveragePhonePrice(phones) {
    let totalPrice = 0;
    for (const phone of phones) {
        totalPrice += phone.price;
    }
    const countPhones = phones.length;
    const avgPrice = totalPrice / countPhones;
    return avgPrice;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const averagePrice = findAveragePhonePrice(phones);
console.log('The average price of phone is:', averagePrice);