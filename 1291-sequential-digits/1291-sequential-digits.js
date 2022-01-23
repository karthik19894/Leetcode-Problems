/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    for(let startDigit=1; startDigit <= 9; startDigit++){
        populateAllSequentialDigits(low, high, startDigit, 0, result);
    }
    return result.sort((a,b)=> a - b);
};

function populateAllSequentialDigits(low, high, nextDigit, num, result){
    if(num >= low && num <= high){
        result.push(num);
    }
    if(num > high || nextDigit > 9) return;
    
    populateAllSequentialDigits(low, high, nextDigit + 1, num * 10 + nextDigit, result);
}