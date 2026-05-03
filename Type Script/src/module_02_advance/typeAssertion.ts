let anything: any;

anything = 123;

(anything as number)  // it's a type assertion as we are sure the data type of the identifier "tything" is a number.

type StringORNumber = string | number | undefined;

const WeightConverter = (input: string | number): StringORNumber => {
    if (typeof input === 'number') {
        return input * 1000
    } else if (typeof input === 'string') {
        const [value] = input.split(" ")
        return `Converted weight is ${Number(value)*1000}.`
    }
}

const result1 = WeightConverter(2) as number
console.log(result1)

const result = WeightConverter('2 kg')
console.log(result)