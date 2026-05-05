const logLength = <T extends { length: number }>(input: T) => {
    return input.length
}


const wordCount = {
    wordName: "Thesis",
    type: "Noun",
    length: 6
}
const wordCount2 = {
    wordName: "Thesis",
    type: "Noun",
}


console.log(logLength(wordCount))
console.log(logLength(wordCount2))