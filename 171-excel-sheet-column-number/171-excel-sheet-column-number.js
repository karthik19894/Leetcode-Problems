/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const length = columnTitle.length;
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charNumMap = {};
    for(let i=0; i < alphabets.length; i++){
        let char = alphabets[i];
        charNumMap[char] = i + 1;
    }
    let col = 0;
    for(let char of columnTitle){
        col = col * 26 + charNumMap[char];
    }
    return col;
};