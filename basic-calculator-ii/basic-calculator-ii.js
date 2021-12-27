/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let operation = "+";
    let number = 0;
    let lastNumber = 0;
    let result = 0;
    for(let i=0; i < s.length; i++){
        let char = s[i];
        if(isDigit(char)){
            number = (number * 10) + (char - "0");
        }
        if(isOperator(char) || i===s.length-1){
            if(operation === "+" || operation === "-"){
                result += lastNumber;
                lastNumber = operation === "+" ? number : -number;
            }else if(operation === "*"){
                lastNumber = number * lastNumber;
            }else if(operation === "/"){
                // floor on negative number will result in wrong calculation for eg: floor of -3/2 will give -2 as that is the smallest number closer to -1.5 as -1 will be greater than -1.5
                lastNumber = Math.trunc(lastNumber / number);
            }
            number = 0;
            operation = char;
        }
    }
    result += lastNumber;
    return result;
};

function isDigit(char){
    return char !== " " && !isNaN(char);
}

function isOperator(char){
    const operators = ["*", "/", "+", "-"];
    return operators.includes(char);
}