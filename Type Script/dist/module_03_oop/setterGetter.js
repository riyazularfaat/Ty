"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    _bankBalance; // _bankBalance is a protected access modifier now.
    constructor(userId, userName, bankBalance) {
        this.userId = userId;
        this.userName = userName;
        this._bankBalance = bankBalance;
    }
    // Setter
    set addBalance(amount) {
        this._bankBalance = this._bankBalance + amount;
    }
    // Getter
    get getBalance() {
        return this._bankBalance;
    }
}
const user = new BankAccount(231296, "Riyazul Arfaat", 50);
user.addBalance = 500;
console.log(user.getBalance);
//# sourceMappingURL=setterGetter.js.map