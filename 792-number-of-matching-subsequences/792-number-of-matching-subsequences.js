/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let subsequenceCount = 0;
    const wordLetterMap = {};
    for(let word of words){
        let firstLetter = word[0];
        if(!(firstLetter in wordLetterMap)) wordLetterMap[firstLetter] = [];
        wordLetterMap[firstLetter].push(word);
    }
    
    for(let charInS of s){
        const listOfWordsWaitingForChar = wordLetterMap[charInS] || [];
        wordLetterMap[charInS] = []; // re assigning this to empty list to make sure we are removing the used words
        for(let wordWaiting of listOfWordsWaitingForChar){
            if(wordWaiting.length === 1){
                subsequenceCount++;
            }else{
                const remainingWordToMatch = wordWaiting.slice(1);
                const firstLetterOfRemainingWord = remainingWordToMatch[0];
                if(!(firstLetterOfRemainingWord in wordLetterMap)) {
                    wordLetterMap[firstLetterOfRemainingWord] = [];
                }
                wordLetterMap[firstLetterOfRemainingWord].push(remainingWordToMatch);
            }
        }
    }
    
    return subsequenceCount;
};

