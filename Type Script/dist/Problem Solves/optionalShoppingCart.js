"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotal = (items) => {
    const { name, price, quantity = 1 } = items;
    const totalCost = price * quantity;
    return totalCost;
};
const shopping = {
    name: "Coffee",
    price: 15,
    quantity: 15
};
const shopping2 = {
    name: "books",
    price: 150,
};
console.log(calculateTotal(shopping2));
//# sourceMappingURL=optionalShoppingCart.js.map