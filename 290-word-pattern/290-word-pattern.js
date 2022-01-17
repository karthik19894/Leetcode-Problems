/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    return hasSamePattern(pattern, s);
};

function hasSamePattern(pattern, str){
    const words = str.split(" ");
    if(words.length !== pattern.length) return false;
    let patternPtr = 0;
    let wordPtr = 0;
    const wordPatternMap = {};
    const wordsMapped = new Set();
    while(patternPtr < pattern.length){
        let letter = pattern[patternPtr];
        let word = words[wordPtr];
        if(!(letter in wordPatternMap)){
            if(wordsMapped.has(word)) return false; // word already mapped to some other letter
            wordPatternMap[letter] = word;
            wordsMapped.add(word);
        } else if(wordPatternMap[letter] !== word) return false;
        wordPtr++;
        patternPtr++;
    }
    return true;
}