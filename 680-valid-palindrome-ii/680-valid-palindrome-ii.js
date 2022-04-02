/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    return isPalindrome(s, 0, s.length - 1, true);
};

function isPalindrome(str, i, j, canSkip){
    while(i < j){
        if(str[i] !== str[j]){
            if(canSkip){
                return isPalindrome(str, i+1, j, false) 
                || isPalindrome(str,i, j-1, false);
            }else{
                return false;
            }
        }else{
            i++;
            j--;
        }
    }
    return true;
}