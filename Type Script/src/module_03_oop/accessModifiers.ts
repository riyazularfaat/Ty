class BankAccount { 
    readonly userId: number;
    public userName: string;
    private _bankBalance: number; // _bankBalance is a protected access modifier now.

    constructor(userId: number, userName: string, bankBalance: number) { 
        this.userId = userId
        this.userName = userName
        this._bankBalance = bankBalance
    }

    addBalance(balance: number) { 
        return this._bankBalance = this._bankBalance + balance;
    }
}

class StudentBankAccount extends BankAccount { 

    constructor(userId: number, userName: string, bankBalance: number) { 
        super(userId, userName, bankBalance);
    }
    test() { 
        // return this._bankBalance =>Cannot be accessed as it's private
    }
}

const user1 = new BankAccount(96, "Riyazul Arfaaat", 100)
const user2 = new StudentBankAccount(96, "Riyazul Arfaaat", 100)


// console.log(user1)
// console.log(user1.addBalance(200))
console.log(user2.addBalance(300))
user2.addBalance(20)
console.log(user2.test())