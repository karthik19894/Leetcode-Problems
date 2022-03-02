/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sp = 0, tp = 0;
    if(s.length === 0) return true;
    if(s.length > t.length) return false;
    while(sp < s.length && tp < t.length){
        if(t[tp] === s[sp]) sp++;
        tp++;
    }
    return sp >= s.length;
};