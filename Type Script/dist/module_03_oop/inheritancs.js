"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numberOfHour) {
        console.log(`${this.name} sleeps ${numberOfHour} hours a day.`);
    }
}
class Student extends Person {
    rollNo;
    constructor(name, age, address, rollNo) {
        super(name, age, address);
        this.rollNo = rollNo;
    }
    studentinfo() {
        const info = {
            name: this.name,
            age: this.age,
            address: this.address,
            RollNo: this.rollNo
        };
        return info;
    }
}
class Teacher extends Person {
    designation;
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numberOfHour) {
        console.log(`Mr ${this.name} teaches ${numberOfHour} hours a day.`);
    }
}
const teacher1 = new Teacher("Arman", 25, "Chattogram", "Professor");
const teacher2 = new Teacher("Haroon", 24, "Chattogram", "Professor");
const student1 = new Student("Arfaat", 24, "Lohagara", 96);
console.log(student1);
console.log(student1.studentinfo());
student1.getSleep(6);
//# sourceMappingURL=inheritancs.js.map