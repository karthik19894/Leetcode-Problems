/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let currentNum = num, binary = 1;
    while(currentNum !== 0){
        num = num ^ binary;
        binary = binary << 1;
        currentNum = currentNum >> 1;
    }
    return num;
};