/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    };
    
    for(let bracket of s){
        if(bracket === "(" || bracket === "{" || bracket=== "["){
            stack.push(bracket);
        }else{
            const lastBracket = stack.pop();
            if(lastBracket !== bracketMap[bracket]) return false; 
        }
    }
    
    return stack.length === 0;
    
};