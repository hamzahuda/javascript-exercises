const sumAll = function (numOne, numTwo) {
  if (
    numOne < 0 ||
    numTwo < 0 ||
    typeof numOne != "number" ||
    typeof numTwo != "number"
  ) {
    return "ERROR";
  }
  if (numOne > numTwo) {
    n = numOne - numTwo + 1;
  } else {
    n = numTwo - numOne + 1;
  }
  return (n / 2) * (numOne + numTwo);
};

// Do not edit below this line
module.exports = sumAll;
