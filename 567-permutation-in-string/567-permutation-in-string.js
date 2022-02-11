/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/*
    charCountsOfS1 = { a : 1, b: 1}
    charsToMatch = 2
    charsMatched = 1
    charCountsOfS2 = { b : 1, a : 1}
    char = b
*/
var checkInclusion = function(s1, s2) {
    const charCountsOfS1 = getCharCounts(s1);
    let charsToMatch = Object.keys(charCountsOfS1).length;
    let charCountsOfS2 = {};
    let matchStringLength = s1.length;
    for(let i=0; i< s2.length; i++){
        let char = s2[i];
        if(!(char in charCountsOfS2)) charCountsOfS2[char] = 0;
        charCountsOfS2[char] += 1;
        if(i >= matchStringLength){
            let charToRemove = s2[i - matchStringLength];
            if(charToRemove in charCountsOfS2) charCountsOfS2[charToRemove] -= 1;
        }
        if(equals(charCountsOfS1, charCountsOfS2)){
            return true;
        }
    }
    return false;
};

function equals(counter1, counter2){
    const keys = Object.keys(counter1);
    for(let key of keys){
        if(counter1[key] !== counter2[key]) return false;
    }
    return true;
}

function getCharCounts(str){
    const freqCounter = {};
    for(let char of str){
        if(!(char in freqCounter)) freqCounter[char] = 0;
        freqCounter[char] += 1;
    }
    return freqCounter;
}