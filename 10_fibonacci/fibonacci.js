const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  } else if (num <= 2) {
    return 1;
  } else {
    const fibonacci = [1, 1];
    for (let i = 2; i < num; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci[num - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
