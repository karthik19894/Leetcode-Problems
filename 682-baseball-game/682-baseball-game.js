/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const stack = [];
    for(let op of ops){
        if(op === "C"){
            stack.pop();
        }else if(op === "D"){
            const doubledScore = stack[stack.length - 1] * 2;
            stack.push(doubledScore);
        }else if(op === "+"){
            const score1 = stack[stack.length-1];
            const score2 = stack[stack.length-2];
            stack.push(score1 + score2);
        }else{
            stack.push(parseInt(op));
        }
    }
    return stack.reduce((el, ac)=> ac + el, 0);
};