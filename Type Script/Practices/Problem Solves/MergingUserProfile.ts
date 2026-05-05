type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails

const getProfile = (person: Employee):string => {
    const { name, role } = person;
    return `Name: ${name}, Role: ${role}`
}


const person: Employee = {
    name: "Riyazul Arfaat",
    age: 25,
    role: "Next Level Developer",
    salary: 250000
}

console.log(getProfile(person))