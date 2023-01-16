const convertToCelsius = function (temp) {
  convertedTemp = (temp - 32) * (5 / 9);
  return roundToOneDP(convertedTemp);
};

const convertToFahrenheit = function (temp) {
  convertedTemp = temp * (9 / 5) + 32;
  return roundToOneDP(convertedTemp);
};

function roundToOneDP(number) {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
