function id(value) {
    return value;
}

function getLength(input) {
    if (Array.isArray(input) || typeof input === 'string') {
        return input.length;
    } else {
        throw new Error('string');
    }
}

let exampleString = 'string';
let exampleArray = [1, 2, 3, 4, 5];

console.log(id(42));
console.log(getLength(exampleString));
console.log(getLength(exampleArray));
