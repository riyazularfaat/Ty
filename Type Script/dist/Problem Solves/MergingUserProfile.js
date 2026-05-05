"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getProfile = (person) => {
    const { name, role } = person;
    return `Name: ${name}, Role: ${role}`;
};
const person = {
    name: "Riyazul Arfaat",
    age: 25,
    role: "Next Level Developer",
    salary: 250000
};
console.log(getProfile(person));
//# sourceMappingURL=MergingUserProfile.js.map