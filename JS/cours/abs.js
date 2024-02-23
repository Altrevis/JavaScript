function isPositive(number) {
    return number > 0;
  }

function abs(number) {
    if (number >= 0) {
      return number;
    } else {
      return -number;
    }
}

let positiveNumber = 5;
let negativeNumber = -3;
  
console.log(isPositive(positiveNumber));
console.log(isPositive(negativeNumber));
console.log(abs(positiveNumber));
console.log(abs(negativeNumber));
  