type Products = {
    id: number;
    name: string;
    price: number;
}

const product : Products= {
    id: 101,
    name: "Keyboard",
    price: 50
}

const getProductProp = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]
}

console.log(getProductProp(product, "price"))
console.log(getProductProp(product, "hi"))