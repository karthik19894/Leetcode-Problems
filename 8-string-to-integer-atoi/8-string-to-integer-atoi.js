/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if(s.length === 0) return 0;
    let sign = 1;
    let num = 0;
    let isNumberFound = false;
    let isSignFound = false;
    for(let char of s){
        const isWhiteSpace = char === " ";
        const isNumber = !isNaN(char) && !isWhiteSpace;
        const isSign = char === "+" || char === "-";
        if(isNumberFound && !isNumber) break;
        if(isSignFound && !isNumber) break;
        if(!isNumber && !isNumberFound && !isWhiteSpace && !isSign) break;
        if(isWhiteSpace) continue;
        if(isSign){
            if(isSignFound) break;
            sign = char === "-" ? -1 : 1;
            isSignFound = true;
            continue;
        }
        num = (num * 10 ) + (char - 0);
        isNumberFound = true;
    }
    let finalNum = num * sign;
    let minValue = Math.pow(-2, 31);
    let maxValue = Math.pow(2, 31) - 1;
    if(finalNum > maxValue) return maxValue;
    if(finalNum < minValue) return minValue;
    return finalNum;
};