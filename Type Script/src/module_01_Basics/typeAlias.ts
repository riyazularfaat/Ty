// Type aliasing

type User = {
    id: number;
    name: {
        firstName: string,
        middleName?:string,
        lastName:string
    }
    gender: 'male' | 'female',
    address: {
        division: string,
        city: string
    },
    contact:string
}

const user1: User = {
    id: 123,
    name: {
        firstName: "Riyazul",
        lastName: "Arfaat"
    },
    gender: 'male',
    address: {
        division: "Chattogram",
        city: "Chattogram"
    },
    contact:"0173634747"
}

const user2: User = {
    id: 122,
    name: {
        firstName: "Aminl",
        lastName: "Ullah"
    },
    gender: 'male',
    address: {
        division: "Chattogram",
        city: "Chattogram"
    },
    contact:"01736347445"
}

console.log(user1)
console.log("user2")
console.log(user2)

// Function type aliasing

type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (num1, num2) => { return num1 + num2; }

console.log(add(34,23))