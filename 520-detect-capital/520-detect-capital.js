/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.length <= 1) return true;
    let isFirstLetterUpperCase = isUpperCase(word[0]);
    let secondLetterCase = isUpperCase(word[1]) ? "upper" : "lower";
    if(secondLetterCase === "upper" && !isFirstLetterUpperCase) return false;
    let expectedCase = secondLetterCase === "upper" ? "upper" : "lower";
    for(let i=2; i < word.length; i++){
        let currentCase = isUpperCase(word[i]) ? "upper" : "lower";
        if(currentCase !== expectedCase) return false;
    }
    return true;
};

function isUpperCase(char){
    return char === char.toUpperCase();
}

