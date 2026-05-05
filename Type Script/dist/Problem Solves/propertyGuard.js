"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product = {
    id: 101,
    name: "Keyboard",
    price: 50
};
const getProductProp = (obj, key) => {
    return obj[key];
};
console.log(getProductProp(product, "price"));
//# sourceMappingURL=propertyGuard.js.map