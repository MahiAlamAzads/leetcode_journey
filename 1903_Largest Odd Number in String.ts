/**
 * @param {string} num
 * @return {string}
 */
function largestOddNumber(num: string): string  {
  let number: number = Number(num);

  while (number > 0) {
    if (number % 2 !== 0) return number.toString();
    number = Math.floor(number / 10)
  }
  return number ? number.toString() : "";
};

console.log(largestOddNumber("321943578"));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));
console.log(largestOddNumber("239537672423884969653287101"));


