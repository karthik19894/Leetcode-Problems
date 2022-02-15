/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    if(s.length < k) return 0;
    let substringCount = 0;
    const charsInWindow = new Set();
    let windowStart = 0;
    for(let windowEnd=0; windowEnd < s.length; windowEnd++){
        let char = s[windowEnd];
        while(charsInWindow.has(char)){
            charsInWindow.delete(s[windowStart]);
            windowStart++;
        }
        charsInWindow.add(char, windowEnd);
        let windowLength = windowEnd - windowStart + 1;
        if(windowLength === k){
            substringCount++;
            charsInWindow.delete(s[windowStart]);
            windowStart++;
        } 
    }
    return substringCount;
};