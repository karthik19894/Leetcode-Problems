/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length === 0) return "0";
    const stack = [];
    for(let i=0; i < num.length; i++){
        let currentNum = num[i];
        while(stack.length && top(stack) > currentNum && k > 0){
            stack.pop();
            k--;
        }
        stack.push(currentNum);
    }
    
    while(k > 0){
        stack.pop();
        k--;
    }
    
    if(stack.length === 0) return "0";
    let strStart = 0;
    while(stack[strStart] === "0") strStart++;
    let stringRemovedOfLeadingZeros = stack.slice(strStart).join("");
    return stringRemovedOfLeadingZeros.length > 0 ? stringRemovedOfLeadingZeros : "0";
    
};

function top(stack){
    return stack[stack.length - 1];
}