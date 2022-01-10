/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1;
    let carry = 0;
    let finalSum = "";
    while(i >=0 || j>=0){
        let sum = carry;
        if(i>=0){
            sum += parseInt(a[i--]);
        }
        if(j>=0){
            sum += parseInt(b[j--]);
        }
        let binaryDigit = sum % 2;
        finalSum = binaryDigit + finalSum;
        carry = Math.floor(sum / 2);
    }
    if(carry > 0){
        finalSum = 1 + finalSum;
    }
    return finalSum;
};