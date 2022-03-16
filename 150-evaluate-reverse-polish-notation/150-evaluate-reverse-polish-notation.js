/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(let token of tokens){
        if(isOperator(token)){
            const num2 = stack.pop();
            const num1 = stack.pop();
            const result = performOperation(token, num1, num2);
            stack.push(result);
        }else{
            stack.push(parseInt(token));
        }
    }
    return stack[0];
};

function performOperation(operator, num1, num2){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return Math.trunc(num1 / num2);
        default:
            return 0;
    }
}

function isOperator(char){
    return ["+", "-", "*", "/"].includes(char);
}