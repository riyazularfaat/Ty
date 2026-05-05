"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = 123;
anything; // it's a type assertion as we are sure the data type of the identifier "tything" is a number.
const WeightConverter = (input) => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(" ");
        return `Converted weight is ${Number(value) * 1000}.`;
    }
};
const result1 = WeightConverter(2);
console.log(result1);
const result = WeightConverter('2 kg');
console.log(result);
//# sourceMappingURL=typeAssertion.js.map