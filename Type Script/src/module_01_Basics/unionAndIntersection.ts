// Union --> |

type userRole = 'admin' | 'user' | 'guest'



const  getDashboard = (role:userRole) => {
    if (role === 'admin'){
        return 'adminDashboard'
    } else if (role === 'user') {
        return 'userDashboard'
    } else {
        return 'guestDashboard'
    }
}

// console.log(getDashboard('admin'))

// intersection

type Alumni = {
    id: string,
    name: string,
    passYear: string
    
}

type Faculty = {
    desination: string,
    depatment:string
}

type AlumniAndFaculty = Alumni & Faculty

const NazimUddin:AlumniAndFaculty = {
    id: 'C2312',
    name: 'Nazim Uddin',
    passYear: '2020',
    desination: 'Lecturer',
    depatment: 'CSE'
}

console.log(NazimUddin)