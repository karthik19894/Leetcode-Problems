/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let addedNum = num;
    while(Math.floor(addedNum / 10) > 0){
        let sum = 0;
        while(addedNum > 0){
            let lastDigit = addedNum % 10;
            sum += lastDigit;
            addedNum = Math.floor(addedNum / 10);
        }
        addedNum = sum;
    }
    return addedNum;
};