/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0];
    for(let bracket of s){
        if(bracket === "("){
            stack.push(0);
        }else{
            let lastScore = stack.pop();
            let scoreBeforeLast = stack.pop();
            let newScore = scoreBeforeLast + Math.max(2 * lastScore, 1);
            stack.push(newScore);
        }
    }
    return stack.pop();
};