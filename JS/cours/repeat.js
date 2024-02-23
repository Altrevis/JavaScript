function repeat(inputString, repeatCount) {
    if (repeatCount < 0) {
        throw new Error("String");
    }

    let repeatedString = "";
    for (let i = 0; i < repeatCount; i++) {
        repeatedString += inputString;
    }

    return repeatedString;
}

let result = repeat("Hello, ", 3);
console.log(result);

