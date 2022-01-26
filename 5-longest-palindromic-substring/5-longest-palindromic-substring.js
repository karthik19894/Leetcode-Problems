/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 0) return "";
    if(s.length === 1) return s;
    let longest = 0;
    let leftIndex = 0;
    let rightIndex = 0;
    // for odd palindromes
    for(let i=1; i < s.length - 1; i++){
        let idxBefore = i-1;
        let idxAfter = i + 1;
        if(s[idxBefore] !== s[idxAfter]) continue;
        let { left, right, length } = expand(s, idxBefore, idxAfter);
        if(length > longest){
            longest = length;
            leftIndex = left;
            rightIndex = right;
        }
    }
    
    // for even palindromes
    for(let i=0; i < s.length - 1; i++){
        let idxAfter = i + 1;
        if(s[i] !== s[idxAfter]) continue;
        let {left, right, length} = expand(s, i, idxAfter);
        if(length > longest){
            longest = length;
            leftIndex = left;
            rightIndex = right;
        }
    }
    
    return s.substring(leftIndex, rightIndex + 1);
    
};


function expand(s, left, right){
    let start = left, end = right;
    while(left >=0 && right < s.length && s[left] === s[right]) {
        start = left;
        end = right;
        left--;
        right++;
    }
    return {
        length: end - start + 1,
        left: start,
        right: end
    }
}