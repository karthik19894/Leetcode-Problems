/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const visitedWords = new Set();
    const adjList = getAdjacencyList([beginWord, ...wordList]);
    const queue = new Queue();
    queue.enqueue([beginWord, 1]);
    while(!queue.isEmpty()){
        const [word, distance] = queue.dequeue();
        const nextWords = adjList[word];
        for(let nextWord of nextWords){
            if(nextWord === endWord) return distance + 1;
            if(!visitedWords.has(nextWord)){
                queue.enqueue([nextWord, distance + 1]);
                visitedWords.add(word);
            }
        }
    }
    return 0;
};


function getAdjacencyList(wordList){
    const adjList = {};
    const wordsSet = new Set(wordList);
    const chars = "abcdefghijklmnopqrstuvwxyz";
    for(let word of wordList){
        if(!(word in adjList)) adjList[word] = [];
        for(let i=0; i < word.length; i++){
            for(let char of chars){
                let wordReplacedOf1Char = word.substring(0,i) + char + word.substring(i+1);
                if(wordReplacedOf1Char !== word && wordsSet.has(wordReplacedOf1Char)){
                    adjList[word].push(wordReplacedOf1Char);
                }
            }
            
        }
    }
    return adjList;
}