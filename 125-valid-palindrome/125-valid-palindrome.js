/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 1) return true;
    let left = 0, right = s.length - 1;
    while(left < right){
        while(left < s.length && !isAlphaNumeric(s[left])) left++;
        while(right >=0 && !isAlphaNumeric(s[right])) right--;
        if(left >= right) break;
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
};

function isAlphaNumeric(char){
        const charCode = char.charCodeAt(0);
        return(charCode >=48 && charCode <= 57) 
    || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
};