let secretValue: unknown = "typescript is awesome";

const secretValueAsString = secretValue as string;

const upperValue = secretValueAsString.toUpperCase();

console.log(upperValue)