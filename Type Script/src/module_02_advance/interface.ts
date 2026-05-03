type User = {
    name: string;
    age: number;
}

type Role = {
    role: 'admin' | 'guest';
}

type UserWithRole = User & Role

const user1:UserWithRole = {
    name: 'Riyazul Arfaat',
    age: 25,
    role: 'admin',
}

const user2: User = {
    name: 'Haroon',
    age: 24,
}

// interface works with object type => array, object, fuction

interface IUser{
    name: string;
    age: number;
}

interface IUserWithRole extends IUser {
    role: 'admin' | 'guest';
}

const user3: IUserWithRole = {
    name: "Riyazul Arfaat",
    age: 25,
    role:'admin',
}

console.log(user3)


// With function

type Add = (num1: number, num2: number) => number

const add:Add = (num1, num2) => {
    return num1 + num2
}


interface IAdd {
    (num1: number, num2: number): number
}

const addition: IAdd = (num1, num2) => {
    return num1 + num2
}

console.log(addition(34, 26))

// array

type Friends = string[];

const friends: Friends = ['X', 'Y', 'Z']


interface IFriends {
    [index: number]: string;
}

const friends1: IFriends = ['X', 'Y', 'Z'];

console.log(friends1)