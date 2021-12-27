/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let operation = "+";
    let number = 0;
    const stack = [];
    for(let i=0; i < s.length; i++){
        let char = s[i];
        if(isDigit(char)){
            number = (number * 10) + (char - "0");
        }
        if(isOperator(char) || i===s.length-1){
            if(operation === "+"){
                stack.push(number);
            }else if(operation === "-"){
                stack.push(-number);
            }else if(operation === "*"){
                let stackTop = stack.pop();
                stack.push(stackTop * number);
            }else if(operation === "/"){
                let stackTop = stack.pop();
                // floor on negative number will result in wrong calculation for eg: floor of -3/2 will give -2 as that is the smallest number closer to -1.5 as -1 will be greater than -1.5
                stack.push(Math.trunc(stackTop / number));
            }
            number = 0;
            operation = char;
        }
    }
    let result = 0;
    while(stack.length){
        const num = stack.pop();
        result += num;
    }
    return result;
};

function isDigit(char){
    return char !== " " && !isNaN(char);
}

function isOperator(char){
    const operators = ["*", "/", "+", "-"];
    return operators.includes(char);
}