/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const strArr = s.split("");
    const charIdxStack = [];
    for(let i=0; i < s.length; i++){
        let char = s[i];
        if(char === "("){
            charIdxStack.push(i);
        }else if(char === ")" && charIdxStack.length){
            charIdxStack.pop();
        }else if(char === ")"){
            strArr[i] = "";
        }
    }
    charIdxStack.forEach(charIdx=> {
       strArr[charIdx] = ""; 
    });
    return strArr.join("");
};