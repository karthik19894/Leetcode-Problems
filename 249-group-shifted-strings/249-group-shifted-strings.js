/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const hashKeyMap = {};
    for(let string of strings){
        let key = ".";
        for(let i=0; i < string.length - 1; i++){
            let diff = string[i+1].charCodeAt(0) - string[i].charCodeAt(0);
            if(diff < 0) diff += 26;
            key += "." + diff;
        }
        if(!(key in hashKeyMap)) hashKeyMap[key] = [];
        hashKeyMap[key].push(string); 
    }
    return Object.values(hashKeyMap);
};