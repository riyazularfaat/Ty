type CartItem = {
    name: string;
    price: number;
    quantity?: number;
};

const calculateTotal = (items: CartItem):number => {
    const { name, price, quantity = 1 } = items
    const totalCost = price * quantity
    return totalCost
}

const shopping: CartItem = {
    name: "Coffee",
    price: 15,
    quantity: 15
}
const shopping2: CartItem = {
    name: "books",
    price: 150,
}

console.log(calculateTotal(shopping2))