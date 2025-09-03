/* Task-03 */
function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotalPrice = laptopQuantity * laptopPrice;
    const tabletTotalPrice = tabletQuantity * tabletPrice;
    const mobileTotalPrice = mobileQuantity * mobilePrice;

    const totalMoneyRequired = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    return totalMoneyRequired;
}

const totalBudget = calculateElectronicsBudget(3, 2, 5);
console.log('Total money required:', totalBudget);