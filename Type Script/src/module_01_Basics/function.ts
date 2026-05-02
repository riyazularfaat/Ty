// Function --> arrow function, normal function

// normal function
function addNormal(num1: number, num2: number): number{
    return num1 + num2;
}

// arrow function
const addArrow = (num1: number, num2: number):number => num1 + num2;

console.log(`Normal addition:  ${addNormal(5,7)}`)
console.log(`Arrow addition:  ${addArrow(5, 7)}`)


// object => function => method
const userPro = {
    name: "Arfaat",
    balance: 0,
    addBalance(value: number){
        this.balance = this.balance + value
    }
}

userPro.addBalance(200)
userPro.addBalance(400)
console.log(`Current balance of ${userPro.name} is : ${userPro.balance}`)

const arr: number[] = [5, 6, 8, 7, 9];
const sqrArr = arr.map((x: number): number => x * x)

console.log(sqrArr)