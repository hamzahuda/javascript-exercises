const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function (numArray) {
  return numArray.reduce((total, num) => {
    return (total += num);
  }, 0);
};

const multiply = function (numArray) {
  return numArray.reduce((total, num) => {
    return (total *= num);
  }, 1);
};

const power = function (num, exponent) {
  total = num;
  for (let i = 1; i < exponent; i++) {
    total = multiply([total, num]);
  }
  return total;
};

const factorial = function (num) {
  let total = num;
  while (num > 1) {
    total *= --num;
  }
  if (total === 0) {
    return 1;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
