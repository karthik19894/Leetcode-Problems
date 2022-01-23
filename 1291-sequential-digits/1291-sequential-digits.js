/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    let template = "123456789";
    let lowAsString = low.toString();
    let highAsString = high.toString();
    let minLength = lowAsString.length;
    let maxLength = highAsString.length;
    for(let length=minLength; length <= maxLength; length++){
        for(let windowStart=0; windowStart + length <= template.length; windowStart++){
            let sequentialNumStr = template.substring(windowStart, windowStart + length);
            let sequentialNum = parseInt(sequentialNumStr);
            if(sequentialNum >= low && sequentialNum <= high){
                result.push(sequentialNum);
            }
        }
    }
    return result;
};
