// Array

let fruitsList: string[] = ["apple", "banana", "pinapple", "guava"]
// console.log(fruitsList)


let marks: number[] = [50, 60, 70, 100];
// console.log(marks)

let studentMarks: (string | Number)[] = ['Amin', 60, 'Rakib', 80, 'Nakib', 70];
// console.log(studentMarks)

// tuple

let nameAndRoll: [string, Number] = ['Rafi', 90];
// console.log(nameAndRoll)
// console.log(typeof nameAndRoll) //Checking data type

let destination: [string, string] = ['Chattogram', 'Dhaka'];
let coordinate: [number, number] = [60, 56];
// console.log(destination)
// console.log(coordinate)

// Reference types -> Object

/*
const user: {
    firstName: string;
    middleName?: string; // ? defines the identifier is optional. --. It's optional type.
    lastName: string;
    university: "IIUC" //type: literal type  --> cannot be changed
    deptName: string
} = {
    firstName: "Riyazul",
    lastName: "Arfaat",
    university: 'IIUC', //It cannot be changed as it's literal type.
    deptName: "CSE"
}*/

const user: {
    firstName: string;
    middleName?: string;
    lastName: string;
    readonly university: "IIUC"; //access modifier
    deptName: string;
} = {
    firstName: "Riyazul",
    lastName: "Arfaat",
    university: 'IIUC', //It cannot be changed as it's literal type.
    deptName: "CSE"
}

console.log(user)