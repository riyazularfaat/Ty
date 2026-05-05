"use strict";
// Union --> |
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === 'admin') {
        return 'adminDashboard';
    }
    else if (role === 'user') {
        return 'userDashboard';
    }
    else {
        return 'guestDashboard';
    }
};
const NazimUddin = {
    id: 'C2312',
    name: 'Nazim Uddin',
    passYear: '2020',
    desination: 'Lecturer',
    depatment: 'CSE'
};
console.log(NazimUddin);
//# sourceMappingURL=unionAndIntersection.js.map