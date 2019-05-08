let assert = require('assert');

function isPalindromPermutation(str) {
    let occurencesPerChar = new Object();

    for (let idx = 0; idx<str.length; idx++) {
        let currenChar = str[idx];
        if (!occurencesPerChar[currenChar]) {
            occurencesPerChar[currenChar] = 1;
        }
        else {
            occurencesPerChar[currenChar]++;
        }
    }

    let oddNumberFound = false;
    for (charOccurence in occurencesPerChar) {
        if (occurencesPerChar[charOccurence] % 2 === 1) {
            if (oddNumberFound) {
                return false;
            }

            oddNumberFound = true;
        }
    }

    return true;
}

assert(isPalindromPermutation('a') === true);
assert(isPalindromPermutation('ab') === false);
assert(isPalindromPermutation('') === true);
assert(isPalindromPermutation('aabbcc') === true);
assert(isPalindromPermutation('aabbccz') === true);
assert(isPalindromPermutation('awabbccz') === false);