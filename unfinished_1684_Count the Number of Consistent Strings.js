/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = 0;
    let i = words.length - 1;
    while(i > 0){
        if(words[i].includes(allowed)){
            result++
        }
        i--;
    }
    return result;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))