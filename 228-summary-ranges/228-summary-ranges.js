/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0) return [];
    const ranges = [];
    let start = nums[0];
    for(let i=0; i < nums.length; i++){
        const isNotLastIndex = i < nums.length - 1;
        let newRange = "";
        if(isNotLastIndex){
            if((nums[i+1] - nums[i]) > 1){
                if(start !== nums[i]){
                    newRange = `${start}->${nums[i]}`;
                }else{
                    newRange = `${start}`;
                }
                ranges.push(newRange);
                start = nums[i+1];
            }
        }else{
            if(start === nums[i]){
                ranges.push(`${start}`);
            }else{
                newRange = `${start}->${nums[i]}`;
                ranges.push(newRange);
            }
        }
    }
    return ranges;
};