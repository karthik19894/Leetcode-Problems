/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const stack = [];
    const used = new Set();
    const lastIdxMap = getLastIdxMap(s);
    let windowStart = 0;
    for(let i=0; i < s.length; i++){
        let char = s[i];
        if(used.has(char)) continue;
        while(stack.length && top(stack) > char && lastIdxMap[top(stack)] > i){
            used.delete(top(stack));
            stack.pop();
        } 
        stack.push(char);
        used.add(char);
    }
    return stack.join("");
};

function top(stack){
    return stack[stack.length - 1];
}

function getLastIdxMap(str){
    const lastIdxMap = {};
    for(let i=0; i < str.length; i++){
        let char = str[i];
        lastIdxMap[char] = i;
    }
    return lastIdxMap;
}