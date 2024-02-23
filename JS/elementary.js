function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        result += Math.abs(a);
    }
    
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        result = -result;
    }

    return result;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    let quotient = 0;
    let remainder = Math.abs(a);

    while (remainder >= Math.abs(b)) {
        remainder -= Math.abs(b);
        quotient++;
    }

    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        quotient = -quotient;
    }

    return quotient;
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error("Cannot calculate modulo with divisor being zero");
    }

    let remainder = Math.abs(a);

    while (remainder >= Math.abs(b)) {
        remainder -= Math.abs(b);
    }

    if (a < 0) {
        remainder = -remainder;
    }

    return remainder;
}

console.log(multiply(-22, 123));
console.log(divide(10, 3));
console.log(modulo(17, 4));
