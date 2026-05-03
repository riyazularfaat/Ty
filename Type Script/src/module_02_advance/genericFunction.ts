// Generic array

type GenericArray <T> = Array<T>

const fruits: GenericArray<string> = ['apple', 'banana', 'mango']

const numberOfFruits: GenericArray<Number> = [23, 25, 25]

const isEdible: GenericArray<boolean> = [true, true, false]

// Generic tuple

type GenericTuple<X, Y> = [X, Y]

const coordinate: GenericTuple<number, number> = [25, 35]

const couple: GenericTuple<string, string> = ['Amin', 'Amina']


// Using as generic object

const user: GenericArray<{ name: string; age: number; isMarried: boolean }> = [
    {
        name: "Riyazul Arfaat",
        age: 25,
        isMarried: false,
    },
    {
        name: 'Amin',
        age: 23,
        isMarried: true
    }
]

