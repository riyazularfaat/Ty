"use strict";
// Function --> arrow function, normal function
Object.defineProperty(exports, "__esModule", { value: true });
// normal function
function addNormal(num1, num2) {
    return num1 + num2;
}
// arrow function
const addArrow = (num1, num2) => num1 + num2;
console.log(`Normal addition:  ${addNormal(5, 7)}`);
console.log(`Arrow addition:  ${addArrow(5, 7)}`);
// object => function => method
const userPro = {
    name: "Arfaat",
    balance: 0,
    addBalance(value) {
        this.balance = this.balance + value;
    }
};
userPro.addBalance(200);
userPro.addBalance(400);
console.log(`Current balance of ${userPro.name} is : ${userPro.balance}`);
const arr = [5, 6, 8, 7, 9];
const sqrArr = arr.map((x) => x * x);
console.log(sqrArr);
//# sourceMappingURL=function.js.map