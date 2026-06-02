/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < t.length; i++) {
        x += t[i].charCodeAt();
    }
    for (let i = 0; i < s.length; i++) {
        y += s[i].charCodeAt();
    }
    return String.fromCharCode(x-y);
};

console.log(findTheDifference("abc", "abce"))
console.log(findTheDifference("avc", "dacv"))
