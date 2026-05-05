class BankAccount { 
    readonly userId: number;
    public userName: string;
    private _bankBalance: number; // _bankBalance is a protected access modifier now.

    constructor(userId: number, userName: string, bankBalance: number) { 
        this.userId = userId
        this.userName = userName
        this._bankBalance = bankBalance
    }

    // Setter

    set addBalance(amount: number) { 
        this._bankBalance = this._bankBalance + amount
    }

    // Getter

    get getBalance() { 
        return this._bankBalance
    }
}

const user = new BankAccount(231296, "Riyazul Arfaat", 50)

user.addBalance = 500
console.log(user.getBalance)