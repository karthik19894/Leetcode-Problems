/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastIdxMap = {};
    for(let i=0; i < s.length; i++){
        let char = s[i];
        lastIdxMap[char] = i;
    }
    const result = [];
    let partitionEnd = 0, partitionStart = 0;
    for(let i=0; i < s.length; i++){
        let char = s[i];
        partitionEnd = Math.max(partitionEnd, lastIdxMap[char]);
        if(i === partitionEnd){
            result.push(partitionEnd - partitionStart + 1);
            partitionStart = i + 1;
        }
    }
    return result;
};