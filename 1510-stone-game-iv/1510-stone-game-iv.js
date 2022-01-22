/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    const cache = new Array(n+1).fill(null);
    cache[0] = false;
    return hasWon(n, cache);
};

function hasWon(n, cache){
    if(n === 0){
        return false;
    }
    if(cache[n] !== null) return cache[n];
    const possibleNums = getPossibleSquareNumbers(n);
    // first move is made by alice, so any if any of the other steps make bob fail then alice has won
    for(let num of possibleNums){
        if(!hasWon(n - (num * num), cache)){
            return cache[n] = true;
        }
    }
    return cache[n] = false;
}

function getPossibleSquareNumbers(n){
    const possibleNums = [];
    const squareRoot = Math.floor(Math.sqrt(n));
    for(let num=squareRoot; num>0; num--){
        possibleNums.push(num);
    }
    return possibleNums;
}