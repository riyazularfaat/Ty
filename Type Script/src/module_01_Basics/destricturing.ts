// Destruction
// Object destruction: 
const user = {
    id: 123,
    name: {
        firstName: "Riyazul",
        lastName: "Arfaat"
    },
    contact: "0174584673",
    email: 'abc@gmail.com',
    favoriteColor: "Blue"
}

const { contact: myContact, name: {firstName, lastName}  } = user;

console.log(myContact)
const name = firstName +" "+ lastName
console.log(name)



// Array destruction:

const friends = ['Amin', 'Hakim', 'Foyaz', 'Jabait']

const [,,myBestFriend,] = friends

console.log(myBestFriend)