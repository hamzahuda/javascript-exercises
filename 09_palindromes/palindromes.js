const palindromes = function (str) {
  let strArray = str.toLowerCase().split("").filter(isLetter);
  let reverseStrArray = [...strArray];
  reverseStrArray.reverse();
  console.log(strArray, reverseStrArray);
  return strArray.join("") === reverseStrArray.join("");
};

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

// Do not edit below this line
module.exports = palindromes;
