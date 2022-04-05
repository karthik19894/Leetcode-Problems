/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function(s) {
    const words = [];
    constructWords(s, "", words);
    words.sort();
    return words;
};


function constructWords(s, currentWord, words){
    if(s.length === 0){
        words.push(currentWord);
        return;
    }
    let char = s[0];
    if(char === "{"){
        let bracketEnd = s.indexOf("}");
        let bracketWindow = s.slice(1, bracketEnd);
        const charsInBracket = bracketWindow.split(",");
        for(let eachChar of charsInBracket){
            let newWord = currentWord + eachChar;
            constructWords(s.slice(bracketEnd+1), newWord, words);
        }
    }else{
        let newWord = currentWord + char;
        constructWords(s.slice(1), newWord, words);
    }
}