"use strict";
// Array
Object.defineProperty(exports, "__esModule", { value: true });
let fruitsList = ["apple", "banana", "pinapple", "guava"];
// console.log(fruitsList)
let marks = [50, 60, 70, 100];
// console.log(marks)
let studentMarks = ['Amin', 60, 'Rakib', 80, 'Nakib', 70];
// console.log(studentMarks)
// tuple
let nameAndRoll = ['Rafi', 90];
// console.log(nameAndRoll)
// console.log(typeof nameAndRoll) //Checking data type
let destination = ['Chattogram', 'Dhaka'];
let coordinate = [60, 56];
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
const user = {
    firstName: "Riyazul",
    lastName: "Arfaat",
    university: 'IIUC', //It cannot be changed as it's literal type.
    deptName: "CSE"
};
console.log(user);
//# sourceMappingURL=non_primitive.js.map