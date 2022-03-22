/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    let result = new Array(n).fill("a");
    k -= n;
    for(let i=n-1; i >=0 && k > 0; i--){
        let val = Math.min(k, 25);
        result[i] = String.fromCharCode(97 + val);
        k -= val;
    }
    return result.join("");
};