"use strict";
// Spread operator(...)
Object.defineProperty(exports, "__esModule", { value: true });
const foods = ['rice', 'fish', 'snack'];
const fruits = ['apple', 'mango', 'grape'];
const vegetables = ['potato', 'tomato', 'okra'];
foods.push(...fruits); // spread the elements of fruits array in foods array
// console.log(foods)
foods.push(...vegetables);
// console.log(foods)
// rest operator
const inviteFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Dear ${friend}, you are coordially invited to my graduation party.`));
};
// inviteFriends('Noyum', 'Ahmed', 'Arif')
const students = {
    name: ['Hamid', 'Arman', 'Haroon'],
    // id: [90, 94, 95],
};
const expertise = {
    skill: ['HTML', 'Python', 'JS'],
    hobby: ['criket', 'football', 'football']
};
const studentInfo = { ...students, ...expertise };
console.log(studentInfo);
//# sourceMappingURL=speadAndRestOperator.js.map